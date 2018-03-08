/*global require*/
"use strict";

var gulp = require('gulp'),
  pug = require('gulp-pug'),
  prefix = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  imagemin = require('gulp-imagemin'),
  sourcemaps = require('gulp-sourcemaps');

/*
 * Change directories here
 */
var settings = {
  publicDir: 'build',
  sassDir: 'src/assets/scss',
  imgDir: 'src/assets/img',
  cssDir: 'build/assets/css',
  fontDir: 'build/assets/fonts'
};

/**
 * Compile .pug files and pass in data from json file
 * matching file name. index.pug - index.pug.json
 */
gulp.task('pug', function buildHTML() {
  return gulp.src(['src/*.pug', 'src/**/*.pug', '!src/{_parts,_parts/**}', '!src/{_layouts,_layouts/**}'])
    .pipe(pug({
      pretty: true // Remove in final version
    }))
    .pipe(gulp.dest(settings.publicDir));
});

/**
 * Recompile .pug files and live reload the browser
 */
gulp.task('pug-rebuild', ['pug'], function() {
  browserSync.reload();
});


/**
 * Wait for pug and sass tasks, then launch the browser-sync Server
 */
gulp.task('browser-sync', ['sass', 'pug'], function() {//
  browserSync({
    server: {
      baseDir: settings.publicDir,
      index: 'index.html'
    },
    notify: false
  });
});

gulp.task('copyfonts', function() {
  gulp.src('src/assets/fonts/**/*.{ttf,woff,woff2,eof,svg}')
    .pipe(gulp.dest(settings.fontDir));
});

/**
 * Compile .scss files into public css directory With autoprefixer no
 * need for vendor prefixes then live reload the browser.
 */
gulp.task('sass', function() {
  return gulp.src(settings.sassDir + '/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: [settings.sassDir],
      outputStyle: 'compressed'
    }))
    .on('error', sass.logError)
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(settings.cssDir))
    .pipe(browserSync.reload({ stream: true }));
});


/**
 *   Vendor JS :: Copy Vendor JavaScript
 * -----------------------------------------------------------------------------
 */
gulp.task('vendor:js', function() {
  gulp.src([
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-sanitize/angular-sanitize.js',
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
      'node_modules/bowser/src/bowser.js',
      'src/assets/js/*'
    ])
    .pipe(gulp.dest('build/assets/js'))
    .pipe(browserSync.reload({ stream: true }));
});


/**
 *   imagemin :: Copy & Min. Images
 * -----------------------------------------------------------------------------
 */
gulp.task('imagemin', function() {
  gulp.src('src/assets/img/**')
    .pipe(imagemin())
    .pipe(gulp.dest('build/assets/img'))
});

/**
 * Watch scss files for changes & recompile
 * Watch .pug files run pug-rebuild then reload BrowserSync
 */
gulp.task('watch', function() {
  gulp.watch(settings.sassDir + '/**', ['sass']);
  gulp.watch(['*.pug', '**/*.pug'], ['pug-rebuild']);
  gulp.watch(settings.imgDir + '/**', ['imagemin']);
  gulp.watch('src/assets/js/*', ['vendor:js']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync then watch
 * files for changes
 */
gulp.task('default', ['browser-sync', 'watch', 'vendor:js', 'imagemin', 'copyfonts']);
gulp.task('build', ['pug', 'sass', 'vendor:js', 'imagemin', 'copyfonts']);

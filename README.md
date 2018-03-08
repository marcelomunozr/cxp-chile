## CHILEXPRESS, Chilexpress.cl project.

This project uses...

1. [browser-sync](https://github.com/browsersync/browser-sync) to launch a local server and do live reloads as sass and pug files changes
2. [gulp-pug](https://github.com/jamen/gulp-pug) to compile pug files.
3. [gulp-sass](https://github.com/dlmanning/gulp-sass) to compile sass files.
4. [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer) to add vendor prefixes to css files
5. [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) Minify PNG, JPEG, GIF and SVG images
6. [jquery](https://github.com/jquery/jquery)
7. [bootstrap](http://www.getbootstrap.com)

### To run
- Execute `gem install sass` to install SASS.
- Execute `npm install` from this directory to install dev dependencies.
- Execute `gulp` to run all tasks, launch the browser sync local server and watch for changes.

### URL Params
- `?warning=1` displays alerts.
- `?logged=1` displays the page as if the user is logged in.
- `?notify=5` apply the quantity entered in the parameter as the number of notifications.
- `?search=guia&pages=3` successful search result and paginator with 3 pages.
- `?search=guia&pages=7` successful search result and paginator maximun pages and dont view paginator dropdown.
- `?search=guia&pages=8` success and view dropdown in points for more pages.
- `?search=marciano` No results found.
- `?search=marciano1` No results found possible OT.
- `?search=123456789` No results found possible OT.
- `?search=645435642341` successful search OT.
- `shipment-status.html#!/?errorCase=invalid` Tracking results with invalid OT
- `shipment-status.html#!/?errorCase=expired` Tracking results with expired OT
- `shipment-status.html#!/?errorCase=invalid,expired` Tracking results that contain expired and expired OT
- `shipment-status.html#!/?errorCase=invalid,expired&totalErrors=1` Tracking results that contain only invalid or expired cases



### Chilexpress Font change

The font was created with [fontello]  (fontello.com), if you need change the font adding or editing content please follow these steps:

- Open [fontello] (fontello.com).
- Drag and drop the zip file in `~/src/assets/fonts/chilexpress-2.0.1/` **Chilexpress.zip** in the custom area icon in the webpage. Fontello shows the icons selected and you can add the new .svg to the collection.
- drag & drop the svg file to fontello section.
- set a custom name in english and descriptive with the image not the usage.
  - id you need change the codes you cant use the third tab to change the custom codes.
- Download the zip clicking the download button.
- Replace all files in font folder `~/src/assets/fonts/chilexpress-2.0.1/`.
- Add respective class at the end of `~/src/assets/scss/_icon-cxp.scss` file.
- Rename the downloaded file and replace in the respective folder.

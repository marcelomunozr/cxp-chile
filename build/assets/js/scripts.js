$(document).ready(function() {
  initSiteScripts();

  header();
  warningAlert();
  toolBox();
  form();

  renderPaginator();
  copyOnShareLink();
  filterComponent();

  closeStatusTracking();

  menuMobileProfiles();

  //new search toolbox
  toolboxSearch();

});

function initSiteScripts(){
  searchResults();
  $('#ModalOnload').modal('show');//modal on load warning

  // Chosen touch support.
  if ($('.chosen-container').length > 0) {
    $('.chosen-container').on('touchstart', function(e) {
      e.stopPropagation();
      e.preventDefault();
      // Trigger the mousedown event.
      $(this).trigger('mousedown');
    });
  }

  // Close all other boxes on start
  $('.sizes-select').selectize({
    onInitialize: function() {
      //$('.sizes-select').next('.selectize-control').find('input').attr('disabled', 'disabled');
      this.$control_input.attr('readonly', true);
    }
  });

  //stick in the fixed 100% height behind the navbar but don't wrap it
  $('#slide-nav.navbar-top').after($('<div class="inverse" id="navbar-height-col"></div>'));

  var selected = '#slidemenu, .page-content, body, .navbar, .navbar-top, .navbar-mobile';

  $.fn.responsiveTabs = function() {
    this.addClass('responsive-tabs');
    // this.append($('<span class="glyphicon glyphicon-triangle-bottom"></span>'));
    this.append($('<span class="glyphicon glyphicon-menu-down"></span>'));
    this.append($('<span class="glyphicon glyphicon-menu-top"></span>'));

    this.on('click', 'li.active > a, span.glyphicon', function() {
      this.toggleClass('open');
    }.bind(this));

    this.on('click', 'li:not(.active) > a', function() {
      this.removeClass('open');
    }.bind(this));
  };

  $('#nav-tabs-services').responsiveTabs();

  // Active Maker animation to navs main
  function moveMarker() {
    var activeNav = $('.main-tab-item.active a');
    var activewidth = $(activeNav).width();
    var activePadLeft = parseFloat($(activeNav).css('padding-left'));
    var activePadRight = parseFloat($(activeNav).css('padding-right'));
    var totalWidth = activewidth + activePadLeft + activePadRight;

    var precedingAnchorWidth = anchorWidthCounter();

    var activeMarker = $('.active-marker');
    $(activeMarker).css('display', 'block');

    $(activeMarker).css('width', totalWidth);

    $(activeMarker).css('left', precedingAnchorWidth);
  }

  $(window).load(function() {
    moveMarker();
  });


  function anchorWidthCounter() {
    var anchorWidths = 0;
    var a;
    var aWidth;
    var aPadLeft;
    var aPadRight;
    var aTotalWidth;
    $('.nav-menu .nav-main li').each(function(index, elem) {
      var activeTest = $(elem).hasClass('active');
      if (activeTest) {
        // Break out of the each function.
        return false;
      }

      a = $(elem).find('a');
      aWidth = a.width();
      aPadLeft = parseFloat(a.css('padding-left'));
      aPadRight = parseFloat(a.css('padding-right'));
      aTotalWidth = aWidth + aPadLeft + aPadRight;

      anchorWidths = anchorWidths + aTotalWidth;
    });

    return anchorWidths;
  }

  $('.nav-menu .nav-main a').click(function(e) {
    e.preventDefault();
    $('.nav-menu .nav-main li').removeClass('active');
    $(this).parents('li').addClass('active');
    moveMarker();
  });

  // TabPane
  $('#personTab').on('click', function() {
    $('#personTabPane').show();
    $('#businessTabPane').hide();
    $('#entrepreneursTabPane').hide();
    $('#ecommerceTabPane').hide();
  });

  $('#businessTab').on('click', function() {
    $('#personTabPane').hide();
    $('#businessTabPane').show();
    $('#entrepreneursTabPane').hide();
    $('#ecommerceTabPane').hide();
  });

  $('#entrepreneursTab').on('click', function() {
    $('#personTabPane').hide();
    $('#businessTabPane').hide();
    $('#entrepreneursTabPane').show();
    $('#ecommerceTabPane').hide();
  });

  $('#ecommerceTab').on('click', function() {
    $('#personTabPane').hide();
    $('#businessTabPane').hide();
    $('#entrepreneursTabPane').hide();
    $('#ecommerceTabPane').show();
  });

  $('#slidemenu .dropdown-toggle').on('click', function() {
    var son = $(this).next('.dropdown-menu');
    son.addClass('view-son');
  });
  $('#slidemenu .menu-back').on('click', function() {
    var dad = $(this).parent().parent('.dropdown-menu');
    dad.removeClass('view-son');
  });


  $('.page-content').children().on('click', function(e) {
    if (!$(this).hasClass('is-active')) {
      $('.search-container.is-active').each(function() {
        onBlurSearch();
      });
    }
  });



  $('a.dropdown-toggle, .dropdown-menu a').on('touchstart', function(e) {
    e.stopPropagation();
  });


  // Menu Sticky
  $(function() {
    var shrinkElement = 10;
    $(window).scroll(function() {
      var scroll = getCurrentScroll();
      if (scroll >= shrinkElement) {
        $('.site-header .bdr-icon-simplebox').addClass('shrink-element');
        $('.navbar-mobile .logo-image').addClass('shrink-element');
      } else {
        $('.site-header .bdr-icon-simplebox').removeClass('shrink-element');
        $('.navbar-mobile .logo-image').removeClass('shrink-element');
      }
    });

    function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
    }
  });

  // scroll top on click toolbox
  $('a[href="#toolBox"]').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
      // if($('.alert').length) {
      //     scrollTop: $($(this).attr('href')).offset().top + alertHeight - 100
      // }
    }, 400);
    return false;
  });

  // Scrolltop any element with class '.back-to-top'
  $('.back-to-top').click(function() {
    $('.modal').modal('hide');
    $('body,html').animate({
      scrollTop: $("body").offset().top - 0
    }, 400);
    return false;
  });


  // Scrolltop from sticky to toolbox
  $('button.icon-simplebox.toolicon').click(function() {
    $('.modal').modal('hide');
    $('body,html').animate({
      scrollTop: $("body").offset().top
    }, 400);
    return false;
  });

  // FAB show toolbox in inside pages
  $('.icon-simplebox.internal-icon').on('click', function() {
    if($(this).hasClass('open-toolbox')){
      $(this).removeClass('open-toolbox');
      $('body').removeClass('modal-open');
    }else{
      $(this).addClass('open-toolbox');
      if ($(window).width() < 768) {
        $('body').addClass('modal-open');
      }
    }
  });

  // tabs services
  $('#nav-tabs-services a').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
  });

  $('.alert .close').on('click', function() {
    $('* .header-alert').remove();
  });

  //searchbox
  $('.searchtize input').on('focus blur', function() {
    // var padre = $(this).parents('.search-wrapper');
    // padre.toggleClass('on-focus');
  });


  //Add appropiate protocol for map link (ios/android/web)
  var mapLinks = document.querySelectorAll('a.map');
  [].forEach.call(mapLinks, function(link) {
    link.setAttribute('href', getMapLink(link.getAttribute('href')));
  });


  //open user dropdown also in avatar
  $('.avatar').on('click', function(e) {
    e.stopPropagation();
    $('#dropdownUser').dropdown('toggle');
  });



  $('.searchtize, .searchtiza').selectize({
    maxItems: 1,
    valueField: 'match',
    // labelField: 'desc',
    persist: false,
    openOnFocus: false,
    searchField: ['match'],
    clearOnBlur: false,
    highlight: false,

    create: true,
    sortField: 'text',

    onInitialize: function() {

      $('#search-box-desktop-selectized, #search-box-selectized').on('keyup', function() {
        var valorBuscado = '';
        var dataBuscado = '';
        valorBuscado = $(this).val();
        $(this).parents('form').find('input.search-hidden').val(valorBuscado);

      });
      //submit search general
      $('#search-submit-desktop').on('click', function(e) {
        var valorBuscado = '';
        var dataBuscado = '';
        e.stopImmediatePropagation();
        $('#searchBoxDesktop .selectize-input.has-items div[data-value]').each(function() {
          if ($(this).data('value') != '') {
            dataBuscado = $(this).data('value');
          }
        })
        valorBuscado = $('#searchBoxDesktop input.search-hidden').val();

        if (dataBuscado != '') {
          $('#searchBoxDesktop').submit();
        } else {
          if (valorBuscado == '') {
            $('#searchBoxDesktop .error-search.empty').stop(true).fadeIn().delay(4000).fadeOut();
            $('#search-box-desktop-selectized').focus();
          } else {
            location.href="search.html#!/?search="+valorBuscado;
          }
        }
      });
      $('#search-submit').on('click', function(e) {
        var valorBuscado = '';
        var dataBuscado = '';
        e.stopImmediatePropagation();
        $('#searchBox .selectize-input.has-items div[data-value]').each(function() {
          if ($(this).data('value') != '') {
            dataBuscado = $(this).data('value');
          }
        })
        valorBuscado = $('#searchBox input.search-hidden').val();
        if (dataBuscado != '') {
          location.href="search.html#!/?search="+dataBuscado;
        } else {
          if (valorBuscado == '') {
            $('#searchBox .error-search.empty').stop(true).fadeIn().delay(4000).fadeOut();
            $('#search-box-selectized').focus();
          } else {
            location.href="search.html#!/?search="+valorBuscado;
          }
        }
      });
      $('#search-box-desktop-selectized').focus(function() {
        // $('.search-container').css({ 'overflow': 'inherit', 'height': 'auto' });
      })
      $('#search-box-desktop-selectized').blur(function() {
        // $('.error-search.empty').hide();
        // $('.search-container').css({ 'overflow': 'hidden', 'height': '42px' });
      })
    },
    onType: function() {
      $('.error-search.empty').hide();
    },
    onFocus: function(element) {
      // $('.error-search.empty').hide();
    },
    onBlur: function(element) {
      // $('input.search-hidden').val('');
    },
    options: [
      { match: 'Bolsa Grande $400', desc: 'Tamaño: 35X27 cm' },
      { match: 'Bolsa Mediana $369', desc: 'Tamaño: 33X22 cm' },
      { match: 'Fulfillment', desc: 'Recibimos tus productos' }
    ],
    render: {
      item: function(item, escape) {
        return '<div>' +
          (item.match ? '<span class="match">' + escape(item.match) + '</span>' : '') +
          // (item.desc ? '<span class="desc">' + escape(item.desc) + '</span>' : '') +
          '</div>';
      },
      option: function(item, escape) {
        var label = item.match || item.desc;
        var caption = item.match ? item.desc : null;
        return '<div>' +
          '<span class="label">' + escape(label) + '</span>' +
          (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
          '</div>';
      }
    },
    createFilter: function(input) {},
    //create: function(input) {}
  });

  $(".navbar-controls #btnLoginMobile").click(function() {
    var widthWindow = $(window).width();
    if(widthWindow >= 768 && widthWindow < 992){
      $("#mainMenuWrapp").hide();
      $("#mainLoginWrapp").fadeIn();
    }
  });

  $("#mainLoginWrapp .close").click(function() {
    var widthWindow = $(window).width();
    if(widthWindow >= 768 && widthWindow < 992) {
      $("#mainLoginWrapp").hide();
      $("#mainMenuWrapp").fadeIn();
    }
  });

  $("#btnLoginMobile").click(function() {
    if ($(window).width() < 768) {
      if ($("#mainLoginWrappMobile:hidden")[0]) {
        $('.site-header .bdr-icon-simplebox').css({
          'margin-top': 78,
          'opacity': 0,
          'visibility': "hidden"
        });
        $('.site-header .internal-icon').css({
          'margin-top': 16,
          'opacity': 0,
          'visibility': "hidden"
        });
        $('.page-content').css('top', 72);
        $("#mainLoginWrappMobile").slideDown(200);
      } else {
        //$("#mainLoginWrappMobile .close").click();
      }
    }
  });

  $("#mainLoginWrappMobile .close").click(function() {
    if ($(window).width() < 768) {
      $("#mainLoginWrappMobile").slideUp(200);
      $('.site-header .bdr-icon-simplebox, .site-header .internal-icon').removeAttr("style");
      $('.page-content').css('top', 0);
    }
  });

  $('.search-container .selectize-control .selectize-dropdown').on('click', function() {
    // $('.nav-menu .search-container').addClass('is-active');
  });

  // ocultar el buscador general en version mobile
  $('#myNav.overlay .pattern').on('click', function() {
    closeNav();
  });
}

//click in other side for search
$(document).click(function(e) {
  var elemento = $('.search-container.is-active .selectize-dropdown.searchtize');
  var container = $(".search-container");
  if (elemento.is(':visible')) {
  } else {
    if (container.hasClass('is-active')) {

    }
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      onBlurSearch();
    } else {}
  }

  // acordeon searches locations
  $('#acordeonSearchLocationss').on('show.bs.collapse', function() {
    var posi = $(this).position().top;
    // $('#searchResults').animate({ scrollTop: ($('#acordeonSearchLocations').offset().top - posi) }, 400);
  });

  if($(".main-login-wrapp:visible")[0]){
    var $loginWeapp = $(".main-login-wrapp, #btnLoginMobile");
    if(!$loginWeapp.is(e.target) && $loginWeapp.has(e.target).length === 0){
        $("#mainLoginWrappMobile .close").click();
    }
  }

});
document.addEventListener("touchstart", function() {}, true);

// function mobile icon-simplebox
function mobileToolboxIcon() {
  if ($(window).width() >= 768) {
    $('.site-header .bdr-icon-simplebox').hide();
    $('.tool-box .bdr-icon-simplebox').show();
  } else {
    $('.site-header .bdr-icon-simplebox').show();
  }
}

function openNav() {
  $('body').addClass('modal-open');
  document.getElementById("myNav").style.width = "100%";
  $('#myNav .pattern').addClass('fixed');
}

function closeNav() {
  $('body').removeClass('modal-open');
  document.getElementById("myNav").style.width = "0%";
  $('#myNav .pattern').removeClass('fixed');
  var caja = $('#searchBox .searchtize')[0].selectize;
  caja.clear();
  $('#searchBox .error-search').hide();
}

function numberWithDot(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function onBlurSearch() {
  $('.error-search.empty').hide();
  $('.logo').show();
  $('.search-container').removeClass('is-active');
  $('.nav-menu #search-box-desktop').prop('value', '');
  $('.nav-menu #search-box-desktop').attr('placeholder', '');
  $('.active-marker.active-triangle-person').fadeIn('fast');
}

//returns map with protocol for ios/web/android
var getMapLink = function(url) {
  if ((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPod") != -1) || (navigator.platform.indexOf("iPad") != -1)) {
    return 'maps://' + url;
  } else {
    return 'geo:' + url;
  }
};

function header() {
  $('.dropdown-toggle').dropdown();

  // Search Animated Menu Main
  $('.nav-menu .search-icon').on('click', function(e) {
    e.stopPropagation();
    $('.nav-menu .search-container').toggleClass('is-active');
    if ($('.nav-menu .search-container').hasClass('is-active')) {
      $('.logo').hide();
      $('.nav-menu #search-box-desktop').attr('placeholder', '¿Qué estás buscando?');
      $('.active-marker.active-triangle-person').fadeOut('fast');
    } else {
      $('.logo').show();
      //$('.nav-menu #search-box-desktop').attr('placeholder', '');
      $('.nav-menu #search-box-desktop').prop('value', '');
      $('.active-marker.active-triangle-person').fadeIn('fast');
    }
  });

  var $header = $(".header-ref"),
    $headerSubnav = $header.find(".subnav"),
    $headerItem = $header.find(".main-tab-item"),
    selectedStickyMenu = undefined,
    activeLinkID = $header.find('.main-tab-link').eq(0).attr('id'),
    $window = $(window),
    $userNotify = $(".user-menu-notify"),
    $headerMenuTop = $header.find(".header-menu-top"),
    scrollBlock = false,
    $userMenuCloseBtn = $(".user-menu-close-btn");


  //hide sub nav when click twice
  $header.find('.main-tab-link').on('click touch', function(e) {
    if ($header.hasClass("sticky")) {
      if (selectedStickyMenu != $(this).attr('id')) {
        $headerSubnav.removeClass('move');
        setTimeout(function() {
          $headerSubnav.addClass("move");
        }, 100);

        if ($headerSubnav.hide()) {
          $headerSubnav.show().fadeIn(500);
        } else {
          $headerSubnav.hide().fadeIn(500);
        }
        selectedStickyMenu = $(this).attr('id');
      } else {
        e.preventDefault();
        setTimeout(function() {
          $headerItem.removeClass('active');
          $headerSubnav.hide();
        });
        selectedStickyMenu = undefined;

      }
    }
    activeLinkID = $(this).attr('id');
  });

  $headerSubnav.find('.dropdown-toggle').click(function(event) {
    event.stopPropagation();
    // $headerSubnav.find('ul.dropdown-menu').toggle();
    $(this).toggleClass('appear-menu');
  });

  $(document).click(function(e) {
    if ($header.hasClass("sticky") || !$header.hasClass("header-ref")) {
      var $content = $header.find(".nav-main, .subnav");
      if (!$content.is(e.target) && $content.has(e.target).length === 0) {
        $headerItem.removeClass('active');
        selectedStickyMenu = undefined;
        $headerSubnav.hide();
      }
    }
    if (!$headerSubnav.find('.dropdown-toggle, .dropdown-menu').is(e.target) && $headerSubnav.find('ul.dropdown-menu, .dropdown-menu').has(e.target).length === 0) {
      $headerSubnav.find('.dropdown-toggle').removeClass('appear-menu')
    }
  });

  $(".user-menu a.c-button").on("click", function(e) {
    // $('body').addClass('fix');
    $('.pattern-nav').addClass("active");
    $('.internal-icon').filter('.open-toolbox').removeClass('open-toolbox');
    blockScroll(true);
  });

  function blockScroll(isActive){
    if(isActive){
      $('html').css({ 'overflow': 'hidden' });
    }else{
      $('html').css({ 'overflow': 'inherit' });
    }
    scrollBlock = isActive;
  }

  document.ontouchmove = function(e){
    if(scrollBlock){
        e.preventDefault();
    }else{
      return true;
    }
  };

  function calcHeaderHeight(){
      var headerHeight = $header.height();
      if($header.hasClass("sticky")) {
          $headerMenuTop.show();
          $headerSubnav.show();
          headerHeight = $header.height();
          $headerMenuTop.hide();
          $headerSubnav.hide();
      }
      return headerHeight;
  }

  var headerHeight = calcHeaderHeight(),
      init = false;

  $window.on("resize", function() {
      headerHeight = calcHeaderHeight();
  });

  $window.on("scroll", function() {
    var pos = $window.scrollTop();

    if(!init){
        headerHeight = calcHeaderHeight();
        init = true;
    }

    if(pos > headerHeight && $(window).width() >= 768){
        if (!$header.hasClass("sticky")) {
            $headerSubnav.hide();
            $headerMenuTop.removeAttr("style");
            $("body").css("padding-top", headerHeight);
            $headerItem.removeClass('active');
            selectedStickyMenu = undefined;
            $header.addClass("sticky");
            setTimeout(function() {
                $header.addClass("animation");
            });
            $('.dropdown-toggle').removeClass('appear-menu');
        }
    } else{
        if ($header.hasClass("sticky")) {
            $("#" + activeLinkID).parent().addClass("active");
            $header.removeClass("sticky animation");
            $headerSubnav.show();
            $headerMenuTop.show();
            $("body").css("padding-top", 0);
        }
    }
  });

  $window.on("header_height_change", function() {
      headerHeight = calcHeaderHeight();
  });

  function closeUserMenu(){
      /*if ($userNotify.hasClass("open")) {
          $userNotify.removeClass("open");
      }//nada va a pasar*/
      if ($("body").hasClass("fix")) {
          $('#slideUserMenu .dropdown-menu').removeClass('view-son');
          $("body").removeClass("fix");
          $(".user-menu-notify").removeClass("open");
      }
      if ($("body").hasClass("menu-view")) {
          $('#slideUserMenu .dropdown-menu').removeClass('view-son');
          $("body").removeClass("menu-view");
      }
      blockScroll(false);
      setTimeout(function(){
          $('.pattern-nav').removeClass("active");
      });
  }

  $(".user-menu-close-btn").on("click", function(e){
    e.preventDefault();
    setTimeout(function() {
        closeUserMenu();
    });
  });

  $(".user-menu .dropdown-menu").on("click", function(e) {
      if (!$userMenuCloseBtn.is(e.target) && $userMenuCloseBtn.has(e.target).length === 0) {
          e.stopPropagation();
          $(this).parent().addClass("open");
          blockScroll(true);
      }
  });

  $(".user-menu .withNotification a").on("click touch", function(e) {
    e.stopPropagation();
    $(".user-menu-notify").addClass("open");
    blockScroll(true);
  });


  $('.pattern-nav').on("click", function(){
    var $subMenu = $('.sub-menu-profile .right-sub-menu, .sub-menu-assistant .right-sub-menu'),
    $back = $('.mobile-profile-menu .icon-chevron-left');
    $(this).removeClass("active");
    $("body").removeClass("menu-view");
    $("body").removeClass("fix");
    $(".user-menu-notify").filter(".open").removeClass("open");
    $(".dropdown-menu").filter(".view-son").removeClass("view-son");
    $(this).removeClass("active");
    blockScroll(false);
    $subMenu.removeClass('activate');
    $back.removeClass('activate');
    $('.pattern-nav.hidden-md-down').removeClass('active');
  });

  $(".user-menu-notify-close-btn").on("click", function(e) {
    e.stopPropagation();
    $(".user-menu-notify").removeClass("open");
  });

  $(".user-menu-notify").on("click", function(e) {
    e.stopPropagation();
    $(".user-menu").addClass("open");
  });
}

function warningAlert() {
  // Alert close
  var alertHeight = $('.header-alert').innerHeight();
  var navMobile = $('.navbar-mobile').innerHeight() + 40;
  var screenH = window.innerHeight;
  var userMenu = $('.user-menu .options');
  var userMenuNotify = $('.user-menu-notify');

  if ($('.header-alert').length > 0) {
    $('.header-alert .close').on('click', function() {
      if ($(window).width() < 768) {
        $('.site-header .bdr-icon-simplebox').removeClass('bdr-with--alert');
        $('.site-header .bdr-icon-simplebox').css('top', navMobile - 38);
        $('.page-content').css('margin-top', navMobile);
        userMenu.removeClass('warning-visible');
        userMenuNotify.removeClass('warning-visible');
      } else {
        $('.page-content').removeAttr("style");
        $('.site-header .bdr-icon-simplebox').removeAttr("style").removeClass('bdr-with--alert');
      }
      $(window).trigger('header_height_change');
    });
    if(userMenu.length > 0){
      userMenu.addClass('warning-visible');
      userMenuNotify.addClass('warning-visible');
    }
  }
  $('.alert .close').on('click', function() {
    $('* .header-alert').remove();
  });

  function alertResize() {
    alertHeight = $('.header-alert').innerHeight();
    navMobile = $('.navbar-mobile').innerHeight() + 40;

    if ($(window).width() < 768) {
      if ($('.header-alert')[0]) {
        $('.page-content').css('margin-top', alertHeight + navMobile);
        $('.site-header .bdr-icon-simplebox').addClass('bdr-with--alert');
        $('.site-header .bdr-icon-simplebox.bdr-with--alert').css('top', alertHeight + navMobile - 36);
      } else {
        $('.site-header .bdr-icon-simplebox').addClass('bdr-with--alert');
        $('.site-header .bdr-icon-simplebox').css('top', navMobile - 38);
        $('.page-content').css('margin-top', navMobile);
      }
    } else {
      $('.page-content').removeAttr("style");
      $('.site-header .bdr-icon-simplebox').removeAttr("style").removeClass('bdr-with--alert');
    }
  }

  $(window).resize(alertResize);

  alertResize();
}

function form(){
    $("input[type='number']").on("keypress", function(e){
        if ((e.which != 8 && isNaN(String.fromCharCode(e.which))) && e.key !== "ArrowLeft" && e.key !== "ArrowRight" && e.key !== "Backspace"){
            e.preventDefault();
            return false;
        }
    });
}


var toolBox=function() {
  var $toolbox = $(".tool-box"),
    $box = $toolbox.find(".box"),
    $backBtn = $toolbox.find('.btn-back'),
    otIsDeleted = false,
    $toolboxIconInt = $('.icon-simplebox.internal-icon');

    //for external calls
    this.auxChgBox=function(id){changeBox(id);}

  function changeBox(id) {
    $box.removeClass("active");
    if (id) {
      $box.filter("#" + id).addClass("active");
    }

    if (id === "main-box") {
      $('.bdr-icon-simplebox, .icon-simplebox.internal-icon').removeClass("hidden");
      $backBtn.addClass("hidden");
      $('.error-ot.empty, .error-ot.invalid').hide();
    } else {
      $('.bdr-icon-simplebox, .icon-simplebox.internal-icon').addClass("hidden");
      $backBtn.removeClass("hidden");
    }

    if ($(window).width() >= 768) {
      $('.site-header .bdr-icon-simplebox').hide();
    }
  }

  function clearOTItems(){
    var $containerOT = $(".search-ot-toolbox");
    $containerOT.find(".ot-item").each(function() {
      $(this).remove();
    });
    $containerOT.removeClass('with-items');
  }

  $(".toolbox-quotation-btn").on('click', function() {
    changeBox("first-box");
  });

  $(".toolbox-send-package-btn").click(function() {
    changeBox("second-box");
  });

  $(".toolbox-send-document-btn").click(function() {
    changeBox("third-box");
  });

  $(".toolbox-send-money-btn").click(function() {
    changeBox("fourth-box");
  });


  $('.toolbox-close').on('click', function() {
    var $toolboxIconInt = $('.icon-simplebox.internal-icon');
    $toolboxIconInt.toggleClass('open-toolbox');
    $toolboxIconInt.removeClass('hidden');
    $('body').removeClass('modal-open');
    changeBox("main-box");
  });

  // Back
  $backBtn.click(function() {
    changeBox("main-box");
    mobileToolboxIcon();
    $('.site-header .icon-simplebox.internal-icon').removeClass('hidden');
    clearOTItems();
  });

  // ToolBox Tabs buttons
  $toolbox.find('.toolbox-menu-tab .btn').on('click', function() {
    $('.toolbox-menu-tab .btn').removeClass('active-tab');
    $(this).addClass('active-tab');
  });

  // Data toolbox change type
  $('.toolbox-menu-tab .btn-default').on('click', function(e) {
    e.preventDefault();
    var tab = $(this).data('tab');

    $('.tab-zone').hide();
    $('.tab-zone.' + tab + '-tab').fadeIn(0);//400

    $('.toolbox-menu-tab .btn-default').prop('disabled', false);
    $(this).prop('disabled', true);

  });


  $toolbox.find('.selectize-control').on('click touch', function() {
    var $currentSelect = $(this).prev(),
        $othersSelects = $(this).parents("form").find('.selectized').not($currentSelect);
    for(var i=0;i<$othersSelects.length;i++){
        $othersSelects[i].selectize.close();
    }
  });



  function closeToolbox(){
      if($toolboxIconInt[0]){
          $toolboxIconInt.removeClass('open-toolbox');
          $('body').removeClass('modal-open');
          changeBox("main-box");
      }
  }

  //$(document).click(function(e) {
  $(document).on("click touch", function(e){
    //toolbox close
    if ($toolboxIconInt[0] && !$("#ModalOt:visible")[0] && !$("#ModalOtMultiple:visible")[0] && !$("#ModalRegister:visible")[0]) {
      var $objects = $('.sub-toolbox, .icon-simplebox.internal-icon, .modal-content');
      if (!$objects.is(e.target) && $objects.has(e.target).length === 0 && !otIsDeleted) {
          closeToolbox();
      }
    }
    otIsDeleted = false;
  });

  $(".site-header .dropdown-toggle, .site-header .service-client").on("click touch", closeToolbox);

  //height control for mobile
  if($(".icon-simplebox.internal-icon")[0]){
    var $headerMobile = $(".header-ref .navbar-top");
    function setToolboxHeight(){
        if($(window).width() < 768){
            $box.css("max-height", $("body").height() - $headerMobile.height() - 25 - 16);
        }
    }
    setToolboxHeight();
    $(window).resize(setToolboxHeight);
    $(window).scroll(setToolboxHeight);

    $(".header-ref .alert .close").on("click touch", setToolboxHeight);
  }
}

function initMapOT() {
  var antofagasta = {lat: -23.602040, lng: -70.383541};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: antofagasta
  });
  var marker = new google.maps.Marker({
    position: antofagasta,
    map: map
  });
}

// filter component
function filterComponent(){
  var $filter = null,
      $list = null,
      $items = null,
      $detail = null;

  function init(){
    $filter = $(".filter-component");

    if(!$filter[0]) return false;

    $list = $filter.find(".filter-component-list");
    $items = $list.find("li");
    $detail = $(".filter-component-detail");

    setActions();
    setItem(0);
  }

  function setActions(){
      $items.on("click touch", function(){
        setItem($items.index(this));
      });

      $items.on("click touch", function(){

      });

      $list.on("click touch", function(){
          $filter.toggleClass("open");
      });

      $(document).click(function(e) {
          if (!$filter.is(e.target) && $filter.has(e.target).length === 0) {
              $filter.removeClass("open");
          }
      });
  }

  function setItem(index){
    var $current = $items.eq(index);

    $items.filter(".active").removeClass("active");
    $current.addClass("active");

    if($(window).width() < 768) return false;

    var marginLeft = parseInt($current.css("margin-left"), 10);

    $detail.css({
        "width": $current.innerWidth(),
        "left": $current.position().left + marginLeft
    });
  }

  init();
};


// paginator
function renderPaginator(){
    var $paginator = null,
        $morePagesBtn,
        $selectPages,
        $items;

    function init(){
        $paginator = $(".cxp-paginator");
        $morePagesBtn = $paginator.find(".open-pagination .points");
        $selectPages = $paginator.find(".select-pages");
        $items = $paginator.find("li:not(.open-pagination, .arrow-control)");

        setActions();
    }

    function setActions() {
        $morePagesBtn.on("mouseenter", function () {
            $selectPages.addClass('is-active');
        });

        $(document).click(function(e) {
            if (!$morePagesBtn.parent().is(e.target) && $morePagesBtn.parent().has(e.target).length === 0) {
                $selectPages.removeClass("is-active");
            }
        });

        $items.on("click touch", function(){
            $items.filter('.active').removeClass('active');
            $(this).addClass('active');
        });

    }

    init();

};

//Copy link in tracking page
function copyOnShareLink(){
  var $inputCopy = null,
    $btnCopy,
    $elementSearch;

  function init(){
    $inputCopy = $(".copy-input");
    $btnCopy = $(".copy-url");
    $elementSearch = $(".search-element");

    setActions();
  }

  function setActions() {
    $btnCopy.on("click touch", function(){
      $elementSearch.addClass('success-copy');
      copyOnShare();
    });
    $('#modalSharedTracking').on('hidden.bs.modal', function (e) {
      $elementSearch.removeClass('success-copy');
    })
  }

  function copyOnShare() {
    //spike for ipad because no support
    if ((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPod") != -1) || (navigator.platform.indexOf("iPad") != -1)) {
      new Clipboard('.copy-url');
    }else{
      $inputCopy.select();
      try {
        document.execCommand('copy');
        $inputCopy.blur();
      } catch (err) {
        console.log('No se pudo copiar');
      }
    }
  }

  init();
};

function handleBackdropModals(){
  //controla presentacion backdrop
  $('[role="dialog"]').on('shown.bs.modal', function () {
    $('body').addClass('modal-open');
  });

  $('[role="dialog"]').on('hidden.bs.modal', function () {
    $('body').removeClass('modal-open');
  });
}

//close status expired and invalid

function closeStatusTracking(){
  $('.close-status').on('click', function(){
    var padre = $(this).parents('.ot-status');
    padre.addClass('hide-status');
    setTimeout(function() {
      padre.remove();
    }, 400);
  });
}

function searchResults(){
  var $panel,
      clase;

  function init(){
    $panel = $('.results-container .panel');
    clase = 'panel-active';
    setActions();
  }

  function setActions(){
    $panel.on('click', function(){
      if ($(this).hasClass(clase)){
        $(this).removeClass(clase);
      }else{
        $panel.removeClass(clase);
        $(this).addClass(clase);
      }
    });
  }

  init();
}


// new menu mobile for profiles
function menuMobileProfiles(){
  var $select,
    $selectOpen,
    $activeCloseSelect,
    $activeProfile,
    $profile,
    $subMenuProfile,
    $classProfile,
    $openSubMenu,
    $subMenu,
    $back,
    $assistantMenu,
    $openMenu,
    $closeMenu,
    ua,
    isAndroid;

  function init(){
    $select = $('.select-profile'),
    $selectOpen = $('.select-profile.open-select'),
    $activeCloseSelect = $selectOpen.find('.active'),
    $activeProfile = $select.find('.active'),
    $profile = $select.find('li'),
    $subMenuProfile = $('.sub-menu-profile'),
    $openSubMenu = $('.sub-menu-profile .with-son, .sub-menu-assistant .with-son'),
    $subMenu = $('.sub-menu-profile .right-sub-menu, .sub-menu-assistant .right-sub-menu'),
    $back = $('.mobile-profile-menu .icon-chevron-left'),
    $classProfile = '',
    $assistantMenu = $('.sub-menu-assistant'),
    $openMenu = $('.navbar-mobile .navbar-toggle'),
    $closeMenu = $('.close-nav-mobile'),
    ua = navigator.userAgent.toLowerCase(),
    isAndroid = ua.indexOf("android") > -1;

    setActions();
  }

  function setActions(){

    $(document).click(function(e) {
      if (!$select.parent().is(e.target) && $select.parent().has(e.target).length === 0) {
        $select.removeClass("open-select");
        $subMenuProfile.removeClass('is-hide');
      }
    });

    if (isAndroid) {
      if ($(window).width() < 768) {
        $assistantMenu.addClass('is-android-assitant');
      }
    }

    $profile.on('click', function(){
      if($select.hasClass('open-select')){
        $select.removeClass('open-select');
        $subMenuProfile.removeClass('is-hide');
        if(!$(this).hasClass('active')){
          menuClose();
        }
      }else{
        $select.addClass('open-select');
        $subMenuProfile.addClass('is-hide');
      }
    });

    $profile.on('click', function(){
      if(!$(this).hasClass('active')){
        $classProfile = $(this).attr('class');
        selectProfileMenu($classProfile);

        $profile.removeClass('active');
        $(this).addClass('active');
        $select.removeClass('open-select');
        $subMenuProfile.removeClass('is-hide');
      }
    });

    $openSubMenu.on('click', function(e){
      e.preventDefault();
      $subMenu.removeClass('activate');
      $(this).next('.right-sub-menu').addClass('activate');
      $back.addClass('activate');
      //$assistantMenu.removeClass('active');
    });

    $back.on('click', function(){
      $subMenu.removeClass('activate');
      $back.removeClass('activate');
     //$assistantMenu.addClass('active');
    });

    $closeMenu.on('click', function(){
      menuClose();
    });

    $openMenu.on('click', function(){
      menuOpen();
    });
  }

  function selectProfileMenu(profileClass){
    $('.sub-menu-profile').removeClass('active');
    $('.sub-menu-profile').each(function() {
      $classProfile = $(this).attr('class');
      if($(this).hasClass(profileClass)){
        $(this).addClass('active');
      }
    });
  }

  function menuOpen(){
    $('body').addClass('menu-view');
    $('.pattern-nav').addClass("active");
    blockScroll(true);
  }

  function menuClose(){
    $('body').removeClass('menu-view');
    $subMenu.removeClass('activate');
    $back.removeClass('activate');
    $('.pattern-nav').removeClass("active");
    blockScroll(false);
  }

  function blockScroll(isActive){
    if(isActive){
      $('html').css({ 'overflow': 'hidden' });
    }else{
      $('html').css({ 'overflow': 'inherit' });
    }
  }

  init();
}


//new function for search ot in toolbox
function toolboxSearch (){
  var $containerOT = null,
    $items,
    $inputSearch,
    $removeItem,
    $btn,
    valor,
    itemCreate,
    tecla,
    keyCode,
    keyW,
    valorLength,
    totalItems,
    classOt;

  function init(){
    $containerOT = $(".search-ot-toolbox");
    $items = $containerOT.find(".ot-item");
    $inputSearch = $containerOT.find(".search-ot");
    $removeItem = $items.find(".remove");
    $btn = $containerOT.find(".cxp-btn");
    setActions();
  }

  function setActions() {
    $containerOT.on("click touch", function () {
      $inputSearch.focus();
    });

    $inputSearch.on('keydown', function(e){
      valor = $inputSearch.val();
      if (e.key === 'Backspace' && valor === ''){
        $containerOT.find(".ot-item").last().remove();
        totalItems = counterItems();
        enableBtn(totalItems);
      }
    });


    $inputSearch.on('keypress', function(e){
      tecla = e.key;
      keyCode = e.keyCode;
      keyW = e.which;

      valor = $inputSearch.val();
      if (e.key === 'Backspace' && valor === ''){
        $('.ot-item').last().remove();
        totalItems = counterItems();
        enableBtn(totalItems);
      }
    });

    $inputSearch.on('keypress keyup', function(e){
      tecla = e.key;
      keyCode = e.keyCode;
      keyW = e.which;

      valor = $inputSearch.val();
      var isBreak = ( keyW === 13 || keyCode === 13 || keyW === 32 ||keyCode === 32 || tecla === ',' || keyCode === 44 || keyCode === 229 || keyCode === 188 || tecla === ' ');

      if ((keyW != 8 && isNaN(String.fromCharCode(keyW))) || isBreak){
        e.preventDefault();
        if(!isBreak){
          return false;
        }
      }

      valor = $inputSearch.val().trim();
      valorLength = valor.length;

      /* Insertar item al ingresar 12 números en el input
      if (valorLength >= 12){
          insertOt(valor);
      }
      */

      if (isBreak) {
        if(valorLength > 0) {
          insertOt(valor);
        }
      }

    });

    $containerOT.on("click touch", ".ot-item .remove", function () {
      $(this).parents(".ot-item").remove();
      enableBtn(counterItems());
    });

    $inputSearch.on('blur', function(){
      valor = $inputSearch.val();
      if(valor != ''){
        insertOt(valor);
      }
    });
  }

  $('.toolbox-search-btn').on("click touch", function () {
    var $items=$containerOT.find(".ot-item");
    var $totalItems=$items.length;

    if($totalItems > 0){

      //caso OT invalida
      var $uniqueItem=$($items[0]).data('value');
      if ($uniqueItem == '123111111111' || ($uniqueItem.toString().length < 10 || $uniqueItem.toString().length > 12)) {
          changeBox("fifth-box-error-exist");
          errorWarning('invalid');
      }

      //caso de OT expirada
      else if ($uniqueItem == '456111111111') {
         changeBox("fifth-box-error-expired");
         errorWarning('expired');
     }

     //caso OT validas y no expiradas
     else if ($uniqueItem != '123111111111' && $uniqueItem != '456111111111') {
        if($totalItems==1){
          changeBox("fifth-box");
        } else if ($totalItems>1){
          location.href="shipment-status.html";
        }
      }
    } else {
      var $toolbox = $(".tool-box"), $box = $toolbox.find(".box");
      var $currentBox = $box.filter(".active");
      $currentBox.find('.error-ot.empty').stop(true).fadeIn().delay(5000).fadeOut();
    }
  });

  function insertOt(otVal){
    otVal = otVal.trim();
    totalItems = counterItems() + 1;
    classOt = "ot-item";
    itemCreate = '<div class="'+classOt+'" data-value="'+otVal+'">' +
      '<input value="'+otVal+'" type="hidden" name="inputOT'+totalItems+'">'+
      '<div class="ot-element">'+otVal+'<a class="remove">'+
      '<span class="icon-close"></span></a></div>' +
      '</div>';

    //$(itemCreate).insertBefore(".search-ot");
    $(itemCreate).insertBefore(".search-ot-toolbox .search-ot");
    $inputSearch.val("");

    enableBtn(totalItems);
  }


  function changeBox(boxName){
    var t=new toolBox();
    t.auxChgBox(boxName);
  }

  function errorWarning(errorOtType) {
    var $toolbox = $(".tool-box"), $box = $toolbox.find(".box");
    var $currentBox = $box.filter(".active");

    var borderColorByErrorType='#000000';
    var boxClassByErrorType='';

    if(errorOtType=='invalid'){
      borderColorByErrorType='#D0021B';
      boxClassByErrorType='is-error';
    }
    else if(errorOtType=='expired'){
      borderColorByErrorType='#FFB002';
      boxClassByErrorType='is-expired';
    }

    $currentBox.find('.input-exp').val('');
    $currentBox.find('.error-ot.empty').hide();

    if(errorOtType=='invalid'){
      $currentBox.find('.error-ot.invalid').fadeIn(300, function() {
          $currentBox.find('.error-ot.invalid').parent('.input-group').find('input').css({ 'border': '1px solid ' + borderColorByErrorType });
      }).delay(5000).fadeOut(function() {
          $currentBox.find('.error-ot.invalid').parent('.input-group').find('input').css({ 'border': '1px solid #D0D0D0'});
      });
      $currentBox.find(".box-search-ot .input-group").addClass(boxClassByErrorType);
    }

    else if(errorOtType=='expired'){
      $currentBox.find('.error-ot.expired').fadeIn(300, function() {
          $currentBox.find('.error-ot.expired').parent('.input-group').find('input').css({ 'border': '1px solid ' + borderColorByErrorType });
      }).delay(5000).fadeOut(function() {
          $currentBox.find('.error-ot.expired').parent('.input-group').find('input').css({ 'border': '1px solid #D0D0D0'});
      });

    }

  }

  function counterItems(){
    totalItems = 0;
    $containerOT.find(".ot-item").each(function() {
      totalItems = totalItems + 1;
    });
    return totalItems;
  }

  function enableBtn(counter){
    if(counter != 0){
      $containerOT.addClass('with-items');
      $btn.prop('disabled', false);
    }else{
      $containerOT.removeClass('with-items');
      $btn.prop('disabled', 'disabled');
    }
  }

  init();
}

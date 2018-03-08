var appCxp = angular.module('Chilexpress', ['ngRoute', 'ngSanitize']);

appCxp.run(function() {
  // console.log("run app");
});

appCxp.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when('/', {
      template: " ",
      controller: "Main"
    })
    .otherwise({
      redirectTo: "/"
    });
}]);

appCxp.controller("Main", ["$rootScope", "$routeParams", "$timeout", "$location", function($rootScope, $routeParams, $timeout, $location) {
  $rootScope.userNotifications = parseInt($routeParams.notify) || 0;
  $rootScope.logged = $routeParams.logged ? $routeParams.logged === "1" : false;
  $rootScope.warning = $routeParams.warning ? $routeParams.warning === "1" : false;
  $rootScope.search = $routeParams.search || '';
  $rootScope.pages = $routeParams.pages || '';
  $rootScope.otdetail = $routeParams.otdetail || '';
  $rootScope.errorCase = $routeParams.errorCase || '';
  $rootScope.totalErrors = $routeParams.totalErrors || 0;
  $rootScope.serviceHasBeenEvaluated = false;
  //$rootScope.currentProfile='person';
  $rootScope.currentProfile = $routeParams.currentProfile || 'person';



  //OT navigation
  $rootScope.getOtContent = function(otNumber, otType, otStatus, otDestiny){
    $rootScope.ot={};
    $rootScope.ot.number=otNumber;
    $rootScope.ot.type=otType;
    $rootScope.ot.status=otStatus;
    $rootScope.ot.destiny=otDestiny;
    $rootScope.showSliderDetails=true;

    //scroll to top slider content
    setTimeout(function() {
      var body = $("html, body");
      body.stop().animate({scrollTop:0}, 200);
    }, 500);

    //make jquery components compatible
    //with angularJS load page event
    setTimeout(function() {
      renderPaginator();
      filterComponent();
      copyOnShareLink();
      handleBackdropModals();
    }, 1000);
  }

  $rootScope.gobackToOTList = function(){
    $rootScope.ot={};
    $rootScope.showSliderDetails=false;
  }

  $rootScope.getOtRouteMap = function(lat, long){
    var cxpMap = document.getElementById("routeMap");
    var mapOptions = {
      zoom: 12,
      zoomControl: true,
      center: new google.maps.LatLng(lat, long),
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    map = new google.maps.Map(cxpMap, mapOptions);
    infowindow = new google.maps.InfoWindow();
  }

  $rootScope.evaluateOurService = function(note){
    $rootScope.evalService=note;
    console.log('$rootScope.evalService:',$rootScope.evalService);
  }

  $rootScope.getEvaluationOfOurService = function(){
    return $rootScope.evalService;
  }


  $rootScope.successEvalService = function(){
    $timeout(function() {
      //simulate ajax call
      $rootScope.serviceHasBeenEvaluated=true;
    }, 1000);
    $timeout(function() {
      var thisModal=$('#ModalEvalService');
      thisModal.modal('hide');

      //espera que animacion de cierre del modal termine
      $timeout(function() {$rootScope.serviceHasBeenEvaluated=false;}, 2000);

    }, 7000);
  }

  $rootScope.setCurrentProfile = function(profile, isMobile){
    if($rootScope.currentProfile!=profile){
      $rootScope.currentProfile=profile;

      if(isMobile){
        var currentLocation=$location.absUrl();
        currentLocation=currentLocation.substr(0,currentLocation.length - 3);
        currentLocation=currentLocation.replace(/.*\//, '');

        //si cambiamos perfil desde menu mobile Y NO ESTAMOS en index
        //redireccionamos al index MANTENIENDO EL PERFIL
        if(currentLocation!='index.html'){
          location.href="index.html#!/?currentProfile="+$rootScope.currentProfile;
        }
      }
    }


  }

  $rootScope.homeProfile = function(){

    return "home_" + $rootScope.currentProfile + ".html";
  }

  $rootScope.homeProfileLoad = function(){
    //console.log('cargada home ' + $rootScope.currentProfile);

    initSiteScripts();//iniciamos scripts
    searchTopHeader();// habilita el buscador header
    header();
    warningAlert();
    toolBox();
    form();

    renderPaginator();
    copyOnShareLink();
    filterComponent();

    closeStatusTracking();

    cxpValidations();

    //inicialize mapas
    initializeMap();
    geoLocateClick();

    //new search ot toolbox
    toolboxSearch();

    if($(window).width() < 768) {
      $('.close-nav-mobile').trigger('click');
    }

    function searchTopHeader(){
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
          $('.nav-menu #search-box-desktop').attr('placeholder', '');
          $('.nav-menu #search-box-desktop').prop('value', '');
          $('.active-marker.active-triangle-person').fadeIn('fast');
        }
      });
      $('.search-wrapper .selectize-input.items input').attr('placeholder', '¿Qué estás buscando?');
      setTimeout(function() {
        $('.search-ot input').attr('placeholder', 'Ingresa número de orden de transporte');
      }, 10);
    }

    window.scrollTo(0, 0);

  }
}]);

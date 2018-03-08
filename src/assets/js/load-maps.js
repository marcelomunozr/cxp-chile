// the var locations is dummy -> unminify in: http://unminify.com/8
var typeSucu = [
  "Sucursal Pickup",
  "Sucursal Express",
  "Mega Sucursal",
  "Hiper Sucursal",
  "Oficinas PUDO’s"
];

var locations = [
  ["Chilexpress Merced", "Merced 614, Santiago, Región Metropolitana", "-33.4380582", "-70.64586050000003", ["09:00 - 19:00", "10:00 - 13:00", "Cerrado"],
    ["Envíos", "Pago de cuentas", "Recargas", "Giro de dinero", "Envíos por pagar", "Informe Comercial Platimun"],
    ["+56223243221", "+56999229293"], typeSucu[2]
  ],
  ["Chilexpress Huérfanos", "Huérfanos 801, Santiago, Región Metropolitana", "-33.4392992", "-70.64830039999998", ["09:00 - 19:00", "10:00 - 13:00", "Cerrado"],
    ["Envíos", "Pago de cuentas", "Recargas", "Giro de dinero", "Envíos por pagar", "Informe Comercial Platimun"],
    ["+56223243221", "+56999229293"], typeSucu[0]
  ],
  ["Chilexpress Mac Iver", "Enrique Mac Iver 22, Santiago, Región Metropolitana", "-33.4423876", "-70.64645339999998", ["09:00 - 19:00", "10:00 - 13:00", "Cerrado"],
    ["Envíos", "Pago de cuentas", "Recargas", "Giro de dinero", "Envíos por pagar", "Informe Comercial Platimun"],
    ["+56223243221"], typeSucu[3]
  ],
  ["Chilexpress Lo Barnechea", "Av. Las Condes 13033, Lo Barnechea, Las Condes, Región Metropolitana", "-33.3710236", "-70.51104520000001", ["09:00 - 19:00", "10:00 - 13:00", "Cerrado"],
    ["Envíos", "Pago de cuentas", "Recargas", "Giro de dinero", "Envíos por pagar", "Informe Comercial Platimun"],
    ["+56223243221"], typeSucu[1]
  ],
  ["Chilexpress San Francisco de Asís", "Av. Las Condes 12340-9, Vitacura, Lo Barnechea, Región Metropolitana, Chile", "-33.3724492", "-70.51757570000001", ["09:00 - 19:00", "10:00 - 13:00", "Cerrado"],
    ["Envíos", "Pago de cuentas", "Recargas", "Giro de dinero", "Envíos por pagar", "Informe Comercial Platimun"],
    ["+56223243221", "+56999229293"], typeSucu[4]
  ],
  ["Chilexpress Recoleta", "Recoleta 313, Recoleta", "-33.4293782", "-70.64678650000002", ["09:00 - 19:00", "10:00 - 13:00", "Cerrado"],
    ["Envíos", "Pago de cuentas", "Recargas", "Giro de dinero", "Envíos por pagar", "Informe Comercial Platimun"],
    ["+56223243221"], typeSucu[1]
  ],
  ["Chilexpress Mapocho", "Mapocho 4100, Quinta Normal, Región Metropolitana", "-33.4321538", "-70.69107759999997", ["09:00 - 19:00", "10:00 - 13:00", "Cerrado"],
    ["Envíos", "Pago de cuentas", "Recargas", "Informe Comercial Platimun"],
    ["+56223243221", "+56999229293"], typeSucu[0]
  ],
  ["Chilexpress Matucana", "Matucana 763, Santiago, Quinta Normal, Región Metropolitana", "-33.4364391", "-70.68029009999998", ["09:00 - 19:00", "10:00 - 13:00", "Cerrado"],
    ["Recargas", "Giro de dinero", "Informe Comercial Platimun"],
    ["+56223243221"], typeSucu[3]
  ],
  ["Chilexpress Pudahuel", "José Joaquín Pérez 1376, Santiago, Pudahuel, Región Metropolitana", "-33.4229837", "-70.77828590000001", ["09:00 - 19:00", "10:00 - 13:00", "Cerrado"],
    ["Envíos", "Pago de cuentas", "Recargas", "Giro de dinero", "Envíos por pagar", "Informe Comercial Platimun"],
    ["+56223243221"], typeSucu[2]
  ],
  ["Chilexpress Villa Alemana", "Valparaíso 649, Villa Alemana, Región de Valparaíso", "-33.0444245", "-71.37353669999999", ["09:00 - 19:00", "10:00 - 13:00", "Cerrado"],
    ["Envíos", "Pago de cuentas", "Recargas", "Giro de dinero"],
    ["+56223243221", "+56999229293"], typeSucu[4]
  ],
  ["Chilexpress Ramón Freire", "RAMON FREIRE 2414, QUILPUE, Quilpué, Región de Valparaíso", "-33.0441761", "-71.42174610000001", ["09:00 - 19:00", "10:00 - 13:00", "Cerrado"],
    ["Envíos", "Pago de cuentas", "Recargas", "Giro de dinero"],
    ["+56223243221"], typeSucu[0]
  ],
  ["Chilexpress Quilpue", "Andrés Bello 694, Quilpué, Región de Valparaíso", "-33.0465299", "-71.44263160000003", ["09:00 - 19:00", "10:00 - 13:00", "Cerrado"],
    ["Envíos", "Pago de cuentas", "Recargas", "Giro de dinero"],
    ["+56223243221"], typeSucu[1]
  ],
  ["Chilexpress Magallanes 1", "Av. Pdte. Eduardo Freí Montalva 1110, Punta Arenas, Región de Magallanes y de la Antártica Chilena", "40.7127837", "-74.00594130000002", ["09:00 - 19:00", "10:00 - 13:00", "Cerrado"],
    ["Envíos", "Pago de cuentas", "Recargas", "Giro de dinero"],
    ["+56223243221", "+56999229293"], typeSucu[3]
  ],
  ["Chilexpress Magallanes 2", "Local 10, Av. España 1375, Punta Arenas, Región de Magallanes y de la Antártica Chilena", "-53.1387093", "-70.89052779999997", ["09:00 - 19:00", "10:00 - 13:00", "Cerrado"],
    ["Envíos", "Pago de cuentas", "Recargas", "Giro de dinero"],
    ["+56223243221"], typeSucu[4]
  ],
  ["Chilexpress Magallanes 3", "Mejicana 654, Punta Arenas, Región de Magallanes y de la Antártica Chilena", "-53.1576512", "-70.90478539999998", ["09:00 - 19:00", "10:00 - 13:00", "Cerrado"],
    ["Envíos", "Pago de cuentas", "Recargas", "Giro de dinero"],
    ["+56223243221", "+56999229293"], typeSucu[2]
  ],
  ["Chilexpress Magallanes 4", "José Menéndez 813, Punta Arenas, Región de Magallanes y de la Antártica Chilena", "-53.1617763", "-70.90565170000002", ["09:00 - 19:00", "10:00 - 13:00", "Cerrado"],
    ["Envíos", "Pago de cuentas", "Recargas", "Giro de dinero"],
    ["+56223243221"], typeSucu[0]
  ],
  ["Chilexpress Magallanes 5", "FRANCISCO SAMPAIO 345, Porvenir", "-53.2940198", "-70.36984430000001", ["09:00 - 19:00", "10:00 - 13:00", "Cerrado"],
    ["Envíos", "Pago de cuentas", "Recargas", "Giro de dinero"],
    ["+56223243221", "+56999229293"], typeSucu[4]
  ]
];

var gmarkers = [],
  geocoder = new google.maps.Geocoder(),
  userPos,
  map,
  zoomMap = 12,
  infoWindow;

function initializeMap() {
  var cxpMap = document.getElementById("map");
  var mapOptions = {
    zoom: zoomMap,
    zoomControl: true,
    center: new google.maps.LatLng(-33.4408767, -70.6521545),
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  map = new google.maps.Map(cxpMap,
    mapOptions);

  infowindow = new google.maps.InfoWindow();

  var previousMarker; //Previous marker



  for (var i = 0; i < locations.length; i++) {
    // vars arreglo de sucursales
    var title = locations[i][0],
      address = locations[i][1],
      week = locations[i][4][0],
      sat = locations[i][4][1],
      mond = locations[i][4][2],
      services = locations[i][5],
      phones = locations[i][6],
      type = locations[i][7];

    var servicesList = "<ul class='list-services'>";
    for (var x = 0; x < services.length; x++) {
      servicesList += "<li><span class='icon-single-check'></span>" + services[x] + "</li>";
    }
    servicesList += "</ul>";

    var phonesList = "";
    for (var x = 0; x < phones.length; x++){
      phonesList += "<a href='tel:" + phones[x] + "' class='link link-" + x +"'>" + phones[x] + "</a>";
    }

    var sucus = "<div class='tooltip-map'><div class='tootip-map-head'><span class='tooltip-map-head-tag'>" + type + "</span><h3><span class='icon-cxp'></span><span class='title-office'>" + title + "</span></h3><h4>" + address + "</h4></div>" +
      "<div class='tooltip-map-body container-fluid'><div class='rows'><div class='col-sm-7'>" +
      "<ul class='list-unstyled text-left'>" +
      "<li>Lunes a Viernes: <b>" + week + "</b></li>" +
      "<li>Sábado: <b>" + sat + "</b></li>" +
      "<li>Domingo: <b>" + mond + "</b></li>" +
      "</ul>" +
      "<span class='icon-phone'></span>" + phonesList +
      "<a href='#' class='c-button c-button--phantom'>Solicitar ticket de atención</a>" +
      "<a href='#' class='c-button c-button--phantom'>Reserva de hora</a>" +
      "</div><div class='col-sm-5'><span class='services-title'>Servicios de sucursal</span>" +
      servicesList +
      "<a href='branch-office-single.html' class='link nm'>Ver ficha de sucursal</a>" +
      "</div></div></div></div>";

    gmarkers[locations[i][0]] = createMarker(new google.maps.LatLng(locations[i][2], locations[i][3]), sucus //locations[i][1]
    );
  }

  // GELOCATION
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      infowindow.setPosition(pos);
      infowindow.setContent('Ubicación actual');
      map.setCenter(pos);
      userPos = pos;
      createMarker(new google.maps.LatLng(position.coords.latitude, position.coords.longitude), '', 'here');

    }, function() {
      // handleLocationError(true, infowindow, map.getCenter());
      console.log('El sitio no tiene permiso para conocer su ubicación.');
    });
  } else {
    // handleLocationError(false, infowindow, map.getCenter());
    console.log('El sitio no tiene permiso para conocer su ubicación.');
  }

}
google.maps.event.addDomListener(window, "load", initializeMap);


function deleteMarker(theMarker) {
  theMarker.setMap(null);
}

function createMarker(latlng, html, type) {
  var marker = new google.maps.Marker({
    position: latlng,
    draggable: type && type == 'here' ? true : false,
    // zIndex: 100, //;type && type == 'here' ? 0 : 100,
    icon: type && type == 'here' ? 'assets/img/geolocation-point.svg' : 'assets/img/map-pine.svg',
    map: map,
    zoom: zoomMap,
    animation: google.maps.Animation.DROP
  });
  google.maps.event.addListener(marker, 'dragend', function(e) {
    var coords = this.getPosition(),
      dLat = coords.lat(),
      dLng = coords.lng();
    $('#acordeonSearchLocations').remove();
    $('.body-search').fadeIn();
    $('#searchResults').append(nearbyPoints(dLat, dLng));

  });
  google.maps.event.addListener(marker, 'click', function() {
    if (type != 'here') {
      infowindow.setContent(html);
      infowindow.open(map, marker);
      map.setCenter(this.getPosition());

      if ($(window).width() < 992) {
        setTimeout(function() {
          map.panBy(-160, -10);
        }, 200);
      }else{
        map.panBy(-150, -180);
      }
    }
  });

  // AUTOCOMPLETE
  var input = document.getElementById('searchInput');
  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);

  $('#searchInput').on('keydown', function(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();

      google.maps.event.trigger(autocomplete, 'places_changed', function() {
        if (type != 'here') {
          marker.setVisible(false);
        } else {
          marker.setVisible(true);
        }
      });
    }
  });
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    infowindow.close();
    // marker.setVisible(true);
    if (type != 'here') {
      marker.setVisible(false);
    } else {
      marker.setVisible(true);
    }
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      return;
    }

    // Si tenemos los puntos marcados y no queremos eliminarlos
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
      map.setZoom(zoomMap);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(zoomMap);
    }

    marker.setPosition(place.geometry.location);

    // al realizar la busqueda en una ubicación, se buscan las sucursales más cercanas
    var sLat = place.geometry.location.lat(),
      sLng = place.geometry.location.lng(),
      address = '';

    $('#acordeonSearchLocations').remove();
    $('#searchResults').append(nearbyPoints(sLat, sLng));
    $('.body-search').fadeIn();

    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''), (place.address_components[1] && place.address_components[1].short_name || ''), (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

  });
  // return marker;
}

// reverse location my address
// get actual location
function getLocation() {
  return new Promise(function(resolve, reject) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var myPos = position.coords.latitude + ',' + position.coords.longitude;
        geocodeLatLng(geocoder, map, myPos).then(function(response) {
          // console.log(response);
          resolve(response);
        });
      });
    } else {
      reject("La geolocalización no es soportada por esté navegador.");
    }
  });
}

// reverse geocode
function geocodeLatLng(geocoder, map, myPos) {
  return new Promise(function(resolve, reject) {
    var input = myPos,
      latlngStr = input.split(',', 2),
      latlng = { lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1]) };
    geocoder.geocode({ 'location': latlng }, function(results, status) {
      if (status === 'OK') {
        if (results[1]) {
          // map.setCenter(latlng);
          resolve(results[1].formatted_address);
        } else {
          reject(('No existen datos de resultado'));
        }
      } else {
        reject(('Ocurrió un error al intentar localizar tu ubicación: ' + status));
      }
    });
  });
}

// closest sucursales
function findClosestMarkers(lat1, lon1, exOne, exTwo) {
  var pi = Math.PI,
    R = 6371, //radio de distancia
    distances = [],
    closest = -1,
    aux,
    datos;
  for (i = 0; i < locations.length; i++) {
    var lat2 = locations[i][2],
      lon2 = locations[i][3],
      chLat = lat2 - lat1,
      chLon = lon2 - lon1,
      dLat = chLat * (pi / 180),
      dLon = chLon * (pi / 180),
      rLat1 = lat1 * (pi / 180),
      rLat2 = lat2 * (pi / 180);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(rLat1) * Math.cos(rLat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;

    distances[i] = d;
    if (closest == -1 || d < distances[closest]) {
      if (i != exOne && i != exTwo) {
        closest = i;
      }
    }
  }
  aux = closest;
  datos = locations[closest];
  return closest;
}

function nearbyPoints(lat, lon) {
  var first = findClosestMarkers(lat, lon, -2, -2),
    second = findClosestMarkers(lat, lon, first, -2),
    third = findClosestMarkers(lat, lon, first, second),
    points = [first, second, third],
    sucu;

  var info = '<div id="acordeonSearchLocations" role="tablist" aria-multiselectable="true" class="panel-group acordeon-container">';
  for (var i = 0; i < points.length; i++) {
    sucu = locations[points[i]];
    //url map
    var urlMap = '';
    if ((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPod") != -1) || (navigator.platform.indexOf("iPad") != -1)) {
      urlMap = 'maps://?q=' + sucu[1];
    } else {
      urlMap = 'geo:' + sucu[2] + ',' + sucu[3] + '?q=' + sucu[1];
    }
    var services = sucu[5];
    var servicesList = "<ul>";
    for (var x = 0; x < services.length; x++) {
      servicesList += "<li><span class='icon-single-check'></span>" + services[x] + "</li>";
    }
    servicesList += "</ul>";

    var phones = sucu[6];
    var phonesList = "";
    for (var x = 0; x < phones.length; x++) {
      phonesList += "<a href='tel:" + phones[x] + "' class='link link-" + x +"'>" + phones[x] + "</a>";
    }


    info += '<div class="panel">' +
      '<div id="head' + i + '" role="tab" class="panel-heading">' +
      // desktop
      '<a class="marker-link hidden-sm-map">' +
      '<div class="distance"><span class="icon-result-distance"></span><span class="distance-me">0.5 KM</span></div>' +
      '<div class="info"><span class="tooltip-map-head-tag">' + sucu[7] + '</span><h4>' + sucu[0] + '</h4><p>' + sucu[1] + '</p>' +
      '</div>' +
      '</a>' +
      // mobile
      '<a class="visible-sm-map" role="button" data-toggle="collapse" data-parent="#acordeonSearchLocations" data-target="#collapse' + i + '" aria-expanded="false" aria-controls="#collapse' + i + '">' +
      '<div class="distance"><span class="icon-result-distance"></span><span class="distance-me">0.5 KM</span></div>' +
      '<div class="info"><span class="tooltip-map-head-tag">' + sucu[7] + '</span><h4>' + sucu[0] + '</h4><p>' + sucu[1] + '</p>' +
      '</div><span class="glyphicon glyphicon-menu-down"></span>' +
      '</a>' +
      '</div>' +
      '<div id="collapse' + i + '" role="tabpanel" aria-labelledby="head' + i + '" class="panel-collapse collapse">' +
      '<div class="panel-body"><div class="body-info">' +
      '<p>Lunes a Viernes: <strong>' + sucu[4][0] + '</strong><br/>Sábado: <strong>' + sucu[4][1] + '</strong><br/>Domingo: <strong>' + sucu[4][2] + '</strong></p>' +
      '<span class="icon icon-phone"></span>' + phonesList + '<br/>' +
      '<span class="icon icon-pin"> </span><a href="' + urlMap + '" class="link nm"> Ver mapa</a>' +
      '<span class="services-title">Servicios de sucursal</span>' +
      servicesList +
      '</div>'+ //panel-body
      '<a href="#" class="c-button c-button--phantom">Solicitar ticket de atención</a>' +
      '<a href="#" class="c-button c-button--phantom">Reserva de hora</a>' +
      '<div class="text-center"><a href="branch-office-single.html" class="link nm">Ver ficha de sucursal</a></div>' +
      '</div>' + //body-info
      '</div>' +
      '</div>';
  }
  info += "</div>";

  return info;
}


// TEST
$(document).on('ready', function() {
  //on submit form search
  $("#searchInput").on('keyup', function(e) {
    e.stopPropagation();
    var val = $(this).val();
    if (e.keyCode === 13) {
      if (val.length > 0) {
        gmarkers;
      } else {
        $('.search-box-map .error').stop(true).fadeIn().delay(3000).fadeOut();
      }
    }
    return false;
  });

  // Type
  var type = [
    {value: 'Sucursal Express'},
    {value: 'Mega Sucursal'},
    {value: 'Hiper Sucursal'},
    {value: 'Oficinas PUDO’s'},
    {value: 'Sucursal Pickup'}
  ];

  $('.type-office-select').selectize({
    options: type,
    labelField: 'value',
    valueField: 'value',
    searchField: 'value',
    persist: false,
    allowEmptyOption: true,
    onInitialize: function () {
      this.$control_input.attr('readonly', true);
    },
    onChange: function () {

    },
    onBlur: function () {

    },
    onItemAdd: function() {
      var btn = $('.form-component .c-button');
      btn.prop('disabled', false);
      btn.removeClass('is-disabled');
    }
  });

  appearResults();
  appearFilter();
  filterCollapse();
  addItemsFilter();
  geoLocateClick();
});

function geoLocateClick(){
  $('#geoLocate, .show-all-offices').on('click', function(e) {
    //console.log('showwer ');
    e.stopPropagation();
    $(this).prop('disabled', true);
    var $input = $('#searchInput'),
      $bodySearch = $('.body-search'),
      $click = $(this);

    $('.acordeon-container').remove();
    $bodySearch.hide();
    if(!($click.hasClass('c-button') || $click.hasClass('filter-btn'))){
      $input.attr('placeholder', 'Buscando ubicación...');
      $input.val('');
    }
    if (getLocation()) {
      getLocation().then(function(response) {
        if(!($click.hasClass('c-button') || $click.hasClass('filter-btn'))) {
          $input.val(response);
        }
        $('#searchResults').append(nearbyPoints(userPos.lat, userPos.lng));
        $bodySearch.fadeIn();
        infowindow.close();
        map.setCenter(userPos);
        $('#geoLocate, .show-all-offices').prop('disabled', false);
        // gmarkers;
        // newGeo(userPos.lat, userPos.lng);
      })
    }
  });
}

function allPoints(){
  var sucursal,
    title,
    address,
    week,
    sat,
    mond,
    services,
    phones,
    type,
    urlMap,
    servicesList,
    phonesList,
    info = '<div id="searchPage" role="tablist" aria-multiselectable="true" class="panel-group acordeon-container">';

  for (var i = 3; i < locations.length; i++) {
    sucursal = locations[i];
    title = sucursal[0],
    address = sucursal[1],
    week = sucursal[4][0],
    sat = sucursal[4][1],
    mond = sucursal[4][2],
    services = sucursal[5],
    phones = sucursal[6],
    type = sucursal[7],
    urlMap = '';

    if ((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPod") != -1) || (navigator.platform.indexOf("iPad") != -1)) {
      urlMap = 'maps://?q=' + address;
    } else {
      urlMap = 'geo:' + sucursal[2] + ',' + sucursal[3] + '?q=' + address;
    }

    servicesList = "<ul>";
    for (var x = 0; x < services.length; x++) {
      servicesList += "<li><span class='icon-single-check'></span>" + services[x] + "</li>";
    }
    servicesList += "</ul>";

    phonesList = "";
    for (var x = 0; x < phones.length; x++) {
      phonesList += "<a href='tel:" + phones[x] + "' class='link link-" + x +"'>" + phones[x] + "</a>";
    }

    info += '<div class="panel">' +
      '<div id="head' + i + '" role="tab" class="panel-heading">' +
      // desktop
      '<a class="marker-link hidden-sm-map">' +
      '<div class="distance"><span class="icon-result-distance"></span><span class="distance-me">0.5 KM</span></div>' +
      '<div class="info"><span class="tooltip-map-head-tag">' + type + '</span><h4>' + title + '</h4><p>' + address + '</p>' +
      '</div>' +
      '</a>' +
      // mobile
      '<a class="visible-sm-map" role="button" data-toggle="collapse" data-parent="#searchPage" data-target="#collapse' + i + '" aria-expanded="false" aria-controls="#collapse' + i + '">' +
      '<div class="distance"><span class="icon-result-distance"></span><span class="distance-me">0.5 KM</span></div>' +
      '<div class="info"><span class="tooltip-map-head-tag">' + type + '</span><h4>' + title + '</h4><p>' + address + '</p>' +
      '</div><span class="glyphicon glyphicon-menu-down"></span>' +
      '</a>' +
      '</div>' +
      '<div id="collapse' + i + '" role="tabpanel" aria-labelledby="head' + i + '" class="panel-collapse collapse">' +
      '<div class="panel-body"><div class="body-info">' +
      '<p>Lunes a Viernes: <strong>' + week + '</strong><br/>Sábado: <strong>' + sat + '</strong><br/>Domingo: <strong>' + mond + '</strong></p>' +
      '<span class="icon icon-phone"></span>' + phonesList + '<br/>' +
      '<span class="icon icon-pin"> </span><a href="' + urlMap + '" class="link nm"> Ver mapa</a>' +
      '<span class="services-title">Servicios de sucursal</span>' +
      servicesList +
      '</div>'+ //panel-body
      '<a href="#" class="c-button c-button--phantom">Solicitar ticket de atención</a>' +
      '<a href="#" class="c-button c-button--phantom">Reserva de hora</a>' +
      '<div class="text-center"><a href="branch-office-single.html" class="link nm">Ver ficha de sucursal</a></div>' +
      '</div>' + //body-info
      '</div>' +
      '</div>';

  }
  return info;
}


function blockScroll(isActive){
  if(isActive){
    $('html').css({ 'overflow': 'hidden' });
  }else{
    $('html').css({ 'overflow': 'inherit' });
  }
}

function appearResults(){
  var $geolocate,
    $resultBox,
    $boxMap,
    $boxFilter,
    $filterOpen;

  $geolocate = $('.show-all-offices');
  $resultBox = $('#searchResults');
  $boxMap = $('.search-box-map');
  $boxFilter = $('.section-box-filter');
  $filterOpen = $('.filter-office');

  $geolocate.on('click', function(){
    $boxFilter.removeClass('activate');
    $filterOpen.removeClass('event-none');
    $filterOpen.removeClass('is-open');
    blockScroll(false);
    getLocation().then(function(response) {
      $resultBox.append(allPoints());
      $boxMap.addClass('activate');
    });
  });
}

function appearFilter(){
  var $filterOpen,
    $boxFilter,
    $boxMap,
    duration,
    body,
    html;

  $filterOpen = $('.filter-office');
  $boxFilter = $('.section-box-filter');
  $boxMap = $('.search-box-map');
  duration = 0;
  body = $('body');
  html = $('html');

  $filterOpen.on('click', function(){
    if($(window).width() > 767){
      $boxMap.removeClass('activate');
      $filterOpen.toggleClass('is-open');
      duration = 400;
    }else{
      body.addClass('disabled');
      //html.addClass('disabled');
    }
    setTimeout(function() {
      $boxFilter.toggleClass('activate');
    }, duration);
  });

}

function filterCollapse(){
  var $head = $('.filter-content-head'),
    $this;

  $head.on('click', function(){
    $this = $(this);
    if (!$this.hasClass('is-active')) {
      $head.removeClass('is-active');
      setTimeout(function () {
        $this.addClass('is-active');
      }, 100);
    }else{
      $this.removeClass('is-active');
    }
  })

}

function addItemsFilter(){
  var $filter,
    $filterArea,
    $removeFilter,
    $label,
    text,
    $input,
    element,
    idVal,
    $filterElement,
    $clearBtn,
    $cancelBtn,
    $resultBox,
    $filterBox,
    $filterOffice,
    $filterBack,
    $filterBtn,
    body,
    html,
    counterInputs,
    $head;

  function init(){
    $filter = $('.filter-content');
    $filterArea = $(".filter-area");
    $removeFilter = $('.remove');
    $input = $filter.find('input[type="checkbox"]');
    $filterElement = $('.filter-element');
    $clearBtn = $('.clear-filter');
    $cancelBtn = $('.cancel-btn');
    $resultBox = $('.search-box-map');
    $filterBox = $('.section-box-filter');
    $filterOffice = $('.filter-office');
    $filterBack = $('.filter-back')
    $filterBtn = $('.filter-btn');
    body = $('body');
    html = $('html');
    $head = $('.filter-content-head');

    setActions();
  }

  function setActions() {
    $input.on('change', function () {

      $label = $(this).next('label');
      text = $label.html();
      idVal = $(this).attr('id');
      if ($(this).is(':checked')) {
        addFilter(text, idVal);
      } else {
        removeFilter(idVal);
      }
      validFilters();
    });

    $filterArea.on('click touch', '.filter-element .remove', function () {
      idVal = $(this).parents('.filter-element').data('filter');
      removeFilter(idVal);
      $input.filter('#' + idVal).prop('checked',false);
      validFilters();
    });

    $clearBtn.on('click', function(e){
      e.preventDefault();
      clearFilter();
    });

    $cancelBtn.on('click', function(e){
      e.preventDefault();
      clearFilter();
      $filterBox.removeClass('activate');
      $filterOffice.removeClass('is-open');
      setTimeout(function () {
        $resultBox.addClass('activate');
      }, 200);
    });

    $filterBack.on('click', function(e){
      e.preventDefault();
      clearFilter();
      $filterBox.removeClass('activate');
      $filterOffice.removeClass('is-open');
    });
  }

  function validFilters(){
    counterInputs = 0;
    $input.each(function() {
      if($(this).is(':checked')){
        counterInputs = counterInputs + 1;
        console.log(counterInputs);
      }
      if(counterInputs > 0) {
        $filterBtn.removeClass('disabled');
        $clearBtn.removeClass('disabled');
      }else{
        $filterBtn.addClass('disabled');
        $clearBtn.addClass('disabled');
      }
    });
  }

  function addFilter(filterText, filterID){
    element = '<div class="filter-element" data-filter="' + filterID + '">' + filterText +
      '<div class="remove"><span class="icon-close"></span></div>' +
      '</div>';

    $filterArea.append(element);
  }

  function removeFilter(filterId){
    $('.filter-element[data-filter='+ filterId +']').remove();
  }

  function clearFilter(){
    $filterArea.html('');
    $input.prop('checked', false);
    $filterBtn.addClass('disabled');
    $head.removeClass('is-active');
    body.removeClass('disabled');
    //html.removeClass('disabled');
    $clearBtn.addClass('disabled');//add
  }

  //TODO
  function srollToFilter(){
    $('body,html').animate({
      scrollTop: $("#sectionFilter").offset().top - 0
    }, 300);
  }

  init();
}

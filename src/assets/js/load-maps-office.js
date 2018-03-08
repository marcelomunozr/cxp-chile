
$(document).ready(function() {
  loadSingleMap();
});

function loadSingleMap() {
  var map = new google.maps.Map(document.getElementById('mapSingle'), {
    center: new google.maps.LatLng(-33.4408767, -70.6521545),
    zoom: 12,
    zoomControl: true,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  var marker = new google.maps.Marker({
    position: map.getCenter(),
    icon: 'assets/img/map-pine.svg',
    map: map
  });

}

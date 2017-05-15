function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var loc = (myloc ? myloc : uluru);
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: loc
  });
  var marker = new google.maps.Marker({
    position: loc,
    map: map
  });
}

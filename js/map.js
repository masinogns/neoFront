var map;
var maxZoomService;
var infoWindow;
var sliderInputBox = document.querySelector('#myRange');

var opt = { minZoom: 9, maxZoom: 15 };

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 33.2920, lng: 126.2953},
    mapTypeId: 'hybrid'
  });


  map.setOptions(opt);

  sliderInputBox.addEventListener('click',function(e){
    var plusZoomSize = 10;
    map.setZoom(parseInt(sliderInputBox.value) + plusZoomSize);
  });


}

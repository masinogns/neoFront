
/* slider url
https://www.w3schools.com/howto/howto_js_rangeslider.asp*/

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}



var map;
var maxZoomService;
var infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 35.6894, lng: 139.692},
    mapTypeId: 'hybrid'
  });


}


var content = document.querySelector(".content");

var tag = document.querySelector(".nav");
tag.addEventListener('click', activeNav);

function activeNav(e){
  var findIndexOfActive = 0;

  for (var i = 0; i < tag.childElementCount; i++) {
    if (tag.children[i].className == "active") {
      findIndexOfActive = i;
    }
  }

  var target = e.target;
  var parent = e.target.parentNode;

  if (target.className == "map") {
    console.log("map is clicked");
    content.children["list"].style.height = "0px";
    content.children["map"].style.height = "300px";

  }else { // if target == enter
    console.log("list is clikced");
    content.children["list"].style.height = "300px";
    content.children["map"].style.height = "0px";
  }

  changeActive(parent, findIndexOfActive);
}

function changeActive(parent, index){
  tag.children[index].className = "";
  parent.className = "active";
}

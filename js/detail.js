function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
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

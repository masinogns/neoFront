/*https://www.w3schools.com/howto/howto_js_rangeslider.asp*/

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

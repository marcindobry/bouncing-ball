import { dimensions } from "./utilities.js";

$(document).ready(function() {
  var $world = $("#bouncing-world");
  $world.on("click", function(e) {
    var x = e.clientX;
    var y = e.clientY;
    $world.html(`<div class='ball' style='background-color: red; top: ${y - 5}px; left: ${x - 5}px'></div>`);
  })
});

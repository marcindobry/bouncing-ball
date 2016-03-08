import Ball from './Ball.js';
import BallRenderer from './BallRenderer.js'
import { dimensions } from "./utilities.js";

$(document).ready(function() {
  let $world = $("#bouncing-world");
  $world.on("click", function(e) {
    let x = e.clientX;
    let y = e.clientY;
    let ball = new Ball(x, y);
    let ballRenderer = new BallRenderer(ball);
    ballRenderer.$ballElement.appendTo($world);
    setInterval(ballRenderer.move.bind(ballRenderer), 10);
  })
});

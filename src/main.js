import Ball from './Ball.js';
import BallRenderer from './BallRenderer.js';
import Gravity from './Gravity.js'
import RandomForce from './RandomForce.js';
import { dimensions } from "./utilities.js";

$(document).ready(function() {
  let $world = $("#bouncing-world");
  $world.on("click", function(e) {
    let x = e.clientX;
    let y = e.clientY;
    let ball = new Ball(x, y, RandomForce);
    let ballRenderer = new BallRenderer(ball);
    ballRenderer.$ballElement.appendTo($world);
    setInterval(function() {
      ball.applyForces(Gravity);
      ballRenderer.move();
    }, 10);
  })
});

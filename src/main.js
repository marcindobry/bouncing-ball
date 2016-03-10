import Ball from './Ball.js';
import BallRenderer from './BallRenderer.js';

import Boundaries from './forces/Boundaries.js';
import Gravity from './forces/Gravity.js';
import RandomForce from './forces/RandomForce.js';

$(document).ready(function() {
  let $world = $("#bouncing-world");
  $world.on("click", function(e) {
    let x = e.clientX;
    let y = e.clientY;
    let ball = new Ball(x, y, RandomForce);
    let ballRenderer = new BallRenderer(ball);
    ballRenderer.$ballElement.appendTo($world);
    setInterval(function() {
      ball.applyForces(Gravity, Boundaries);
      ballRenderer.move();
    }, 10);
  })
});

import Ball from './Ball.js';

import Boundaries from './forces/Boundaries.js';
import Gravity from './forces/Gravity.js';
import RandomForce from './forces/RandomForce.js';

$(document).ready(function() {
  let $world = $("#bouncing-world");
  $world.on("click", function(e) {
    let x = e.clientX;
    let y = e.clientY;
    let ball = new Ball(x, y, RandomForce, BallRenderer);
    ball.render().appendTo($world);
    setInterval(ball.applyForces.bind(ball, Gravity, Boundaries), 10);
  })
});

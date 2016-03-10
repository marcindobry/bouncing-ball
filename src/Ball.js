export default class Ball {
  constructor(x, y, force) {
    this.x = x;
    this.y = y;
    force.apply(this);
  }

  move() {
    this.x += this.fx;
    this.y += this.fy;
  }

  applyForces(...forces) {
    forces.forEach((force) => force.apply(this));
    this.move();
  }
}

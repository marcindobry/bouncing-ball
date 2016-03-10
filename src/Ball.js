import { dimensions } from "./utilities.js"
export default class Ball {
  constructor(x, y, force) {
    this.x = x;
    this.y = y;
    force.apply(this);
  }

  move() {
    this.x += this.fx;
    this.y += this.fy;
    this.applyBoundaries();
  }

  applyForces(...forces) {
    forces.forEach((force) => force.apply(this));
    this.move();
  }

  applyBoundaries() {
    let worldDimensions = dimensions();
    if(this.x < 0) {
      this.x = 0;
      this.fx = -this.fx * 0.8;
      this.fy = this.fy * 0.95;
    } else if (this.x > worldDimensions.width) {
      this.x = worldDimensions.width;
      this.fx = -this.fx * 0.8;
      this.fy = this.fy * 0.95;
    }
    if(this.y < 0) {
      this.y = 0;
      this.fy = -this.fy * 0.8;
      this.fx = this.fx * 0.95;
    } else if (this.y > worldDimensions.height) {
      this.y = worldDimensions.height;
      this.fy = -this.fy * 0.8;;
      this.fx = this.fx * 0.59;
    }
  }
}

import { dimensions } from "./utilities.js"
export default class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.fx = (Math.random() * 5) * (Math.random() > 0.5 ? 1 : -1);
    this.fy = (Math.random() * 5) * (Math.random() > 0.5 ? 1 : -1);
  }

  move() {
    this.x += this.fx;
    this.y += this.fy;
    this.applyGravity();
    this.applyBoundaries();
  }

  applyGravity() {
    let gravityForce = 0.05;
    this.fy += gravityForce;
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

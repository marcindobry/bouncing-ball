import { dimensions } from "./utilities.js"
export default class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.hot = false;
    this.speed = (Math.random() + 1) * 2;
    this.angle = (Math.random() * 2 * Math.PI) - Math.PI;
  }

  move() {
    let vector = this.vector();
    this.x -= vector.x;
    this.y -= vector.y;
    this.disperseEnergy();
    this.applyGravity();
    this.applyBoundaries();
  }

  applyGravity() {
    let gravityForce = 0.05;
    let vector = this.vector();
    let fnorm = vector.y - gravityForce;
    this.speed = Math.sqrt(Math.pow(vector.x, 2) + Math.pow(fnorm, 2));
    let anglePrime = Math.asin(fnorm / this.speed);
    let absoluteAngle = this.angle % (Math.PI * 2); // Angle within -2pi and 2pi
    if (absoluteAngle < 0) {
      absoluteAngle += (2 * Math.PI);
    }
    if((absoluteAngle <= (Math.PI / 2)) || (absoluteAngle >= (3 * Math.PI / 2))) {
      this.angle = anglePrime;
    } else {
      this.angle = Math.PI - anglePrime;
    }
  }

  applyBoundaries() {
    let worldDimensions = dimensions();
    if (this.x < 0) {
      this.angle = -(this.angle + Math.PI)
      this.hot = true;
    } else if (this.x > worldDimensions.width) {
      this.angle = -(this.angle - Math.PI)
      this.hot = true;
    }
    if (this.y < 0) {
      this.angle = -this.angle
      this.hot = true;
    } else if (this.y > worldDimensions.height) {
      this.angle = -this.angle
      this.hot = true;
    }
  }

  disperseEnergy() {
    if (this.hot) {
      this.speed = 0.8 * this.speed;
      this.hot = false;
    }
  }

  vector() {
    return {
      x: Math.cos(this.angle) * this.speed,
      y: Math.sin(this.angle) * this.speed
    }
  }
}

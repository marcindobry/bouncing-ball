export default class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = (Math.random() + 1) * 2;
    this.angle = (Math.random() * 2 * Math.PI) - Math.PI;
  }

  move() {
    let vector = this.vector();
    this.x -= vector.x;
    this.y -= vector.y;
    this.applyGravity();
    this.applyBorders();
  }

  applyGravity() {
    let gravityForce = 0.05;
    let vector = this.vector();
    let fnorm = vector.y - gravityForce;
    this.speed = Math.sqrt(Math.pow(vector.x, 2) + Math.pow(fnorm, 2))
    let anglePrime = Math.asin(fnorm / this.speed);
    if((this.angle <= (Math.PI / 2)) && (this.angle >= (-Math.PI / 2))) {
      this.angle = anglePrime;
    } else {
      this.angle = Math.PI - anglePrime;
    }
  }

  vector() {
    return {
      x: Math.cos(this.angle) * this.speed,
      y: Math.sin(this.angle) * this.speed
    }
  }
}

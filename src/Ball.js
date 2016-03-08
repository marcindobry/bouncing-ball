export default class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = Math.random();
    this.angle = Math.random() * 2 * Math.PI
  }

  move() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
  }
}

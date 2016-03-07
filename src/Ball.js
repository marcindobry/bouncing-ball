export default class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = Math.random();
    this.angle = Math.random() * 2 * Math.PI
  }

  move() {
    this.position.x += 1;
  }

  static maxSpeed() {
    return 100;
  }

  static minSpeed() {
    return 1;
  }
}

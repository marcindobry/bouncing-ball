const RADIUS = 5;

export default class BallRenderer {
  constructor(ball) {
    this.ball = ball;
    this.$ballElement = $("<div/>", {
      "class": "ball",
      style: `background-color: red;
        top: ${this.top()}px;
        left: ${this.left()}px;
        width: ${this.diameter()}px;
        height: ${this.diameter()}px;`
    });
  }

  top() {
    return this.ball.y - this.radius();
  }

  left() {
    return this.ball.x - this.radius();
  }

  radius() {
    return RADIUS;
  }

  diameter() {
    return this.radius() * 2;
  }

  render() {
  }
}

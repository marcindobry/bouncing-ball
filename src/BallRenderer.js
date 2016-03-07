export default class BallRenderer {
  constructor(ball) {
    this.ball = ball;
    this.$ballElement = $("<div/>", {
      "class": "ball",
      style: `background-color: red; top: ${ball.y}px; left: ${ball.x}px;`
    });
  }

  render() {
  }
}

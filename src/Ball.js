export default class Ball {
  constructor(x, y, force, Renderer) {
    this.x = x;
    this.y = y;
    this.renderer = new Renderer(this);
    force.apply(this);
  }

  move() {
    this.x += this.fx;
    this.y += this.fy;
    this.renderer.move();
  }

  applyForces(...forces) {
    forces.forEach((force) => force.apply(this));
    this.move();
  }

  render() {
    return this.renderer.$ballElement;
  }
}

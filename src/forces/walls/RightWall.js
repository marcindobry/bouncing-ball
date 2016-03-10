import Wall from './Wall.js';

export default class RightWall extends Wall {
  static apply(object) {
    if (object.x > this.worldDimensions.width) {
      object.x = this.worldDimensions.width;
      object.fx = -object.fx * this.primaryDispersion;
      object.fy = object.fy * this.friction;
    }
  }
}

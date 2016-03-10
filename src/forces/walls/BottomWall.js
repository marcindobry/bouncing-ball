import Wall from './Wall.js';

export default class LeftWall extends Wall {
  static apply(object) {
    if (object.y > this.worldDimensions.height) {
      object.y = this.worldDimensions.height;
      object.fy = -object.fy * this.primaryDispersion;
      object.fx = object.fx * this.friction;
    }
  }
}

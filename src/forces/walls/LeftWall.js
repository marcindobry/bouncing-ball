import Wall from './Wall.js';

export default class LeftWall extends Wall {
  static apply(object) {
    if(object.x < 0) {
      object.x = 0;
      object.fx = -object.fx * this.primaryDispersion;
      object.fy = object.fy * this.friction;
    }
  }
}

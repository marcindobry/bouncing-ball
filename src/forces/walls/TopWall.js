import Wall from './Wall.js';

export default class LeftWall extends Wall {
  static apply(object) {
    if(object.y < 0) {
      object.y = 0;
      object.fy = -object.fy * this.primaryDispersion;
      object.fx = object.fx * this.friction;
    }
  }
}

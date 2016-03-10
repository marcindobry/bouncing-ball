import Wall from './Wall.js';
import { dimensions } from "./utilities.js";

export default class LeftWall extends Wall {
  static apply(object) {
    if(object.y < 0) {
      object.y = 0;
      object.fy = -object.fy * 0.8;
      object.fx = object.fx * 0.95;
    }
  }
}

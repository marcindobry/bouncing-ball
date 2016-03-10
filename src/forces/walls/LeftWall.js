import Wall from './Wall.js';
import { dimensions } from "./utilities.js";

export default class LeftWall extends Wall {
  static apply(object) {
    if(object.x < 0) {
      object.x = 0;
      object.fx = -object.fx * 0.8;
      object.fy = object.fy * 0.95;
    }
  }
}

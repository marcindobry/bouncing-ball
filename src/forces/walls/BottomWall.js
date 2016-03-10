import Wall from './Wall.js';
import { dimensions } from "./utilities.js";

export default class LeftWall extends Wall {
  static apply(object) {
    let worldDimensions = dimensions();
    if (object.y > worldDimensions.height) {
      object.y = worldDimensions.height;
      object.fy = -object.fy * 0.8;
      object.fx = object.fx * 0.95;
    }
  }
}

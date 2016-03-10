import Wall from './Wall.js';
import { dimensions } from "./utilities.js";

export default class RightWall extends Wall {
  static apply(object) {
    let worldDimensions = dimensions();
    if (object.x > worldDimensions.width) {
      object.x = worldDimensions.width;
      object.fx = -object.fx * 0.8;
      object.fy = object.fy * 0.95;
    }
  }
}

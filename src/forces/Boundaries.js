import LeftWall from './walls/LeftWall.js'
import RightWall from './walls/RightWall.js'
import TopWall from './walls/TopWall.js'
import BottomWall from './walls/BottomWall.js'

export default class Boundaries {
  static apply(object) {
    walls().forEach((force) => force.apply(object));
  }

  static walls() {
    return [LeftWall, RightWall, TopWall, BottomWall];
  }
}

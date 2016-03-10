import LeftWall from './walls/LeftWall.js'
import RightWall from './walls/RightWall.js'
import TopWall from './walls/TopWall.js'
import BottomWall from './walls/BottomWall.js'

export default class Boundaries {
  static apply(object) {
    [LeftWall, RightWall, TopWall, BottomWall].forEach((force) => force.apply(object));
  }
}

const PRIMARY_DISPERSION = 0.8;
const FRICTION = 0.95;

export default class Wall {
  static primaryDispersion() {
    return PRIMARY_DISPERSION;
  }

  static friction() {
    return FRICTION;
  }
}

const gravityForce = 0.05;

export default class Gravity {
  static apply(object) {
    object.fy += gravityForce;
  }
}

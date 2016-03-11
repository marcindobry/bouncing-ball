const GRAVITY_FORCE = 0.05;

export default class Gravity {
  static apply(object) {
    object.fy += this.gravityForce;
  }
}

Gravity.gravityForce = GRAVITY_FORCE;

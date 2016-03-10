function randomForce() {
  return (Math.random() * 5) * (Math.random() > 0.5 ? 1 : -1);
}

export default class RandomForce {
  static apply(object) {
    object.fx = randomForce();
    object.fy = randomForce();
  }
}


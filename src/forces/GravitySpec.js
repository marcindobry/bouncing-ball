import Gravity from './Gravity.js';

describe('Gravity', () => {
  it('adds gravity force to the vertical force of an object', () => {
    let object = { fy: 1 };
    Gravity.apply(object);
    expect(object.fy).toBe(1.05);

    object = { fy: -1 };
    Gravity.apply(object);
    expect(object.fy).toBe(-0.95);
  });
});

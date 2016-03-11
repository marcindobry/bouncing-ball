import Gravity from './Gravity.js';

describe('Gravity', () => {
  describe('.apply', () => {
    beforeEach(() => {
      Gravity.gravityForce = 0.1;
    });

    it('adds gravity force to the vertical force of an object', () => {
      let object = { fy: 1 };
      Gravity.apply(object);
      expect(object.fy).toEqual(1.1);

      object = { fy: -1 };
      Gravity.apply(object);
      expect(object.fy).toEqual(-0.9);
    });
  });
});

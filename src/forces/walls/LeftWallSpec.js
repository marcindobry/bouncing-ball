import LeftWall from './LeftWall.js';
import { dimensions } from './utilities.js';

describe('LeftWallSpec', () => {
  describe('.apply', () => {
    let object = { x: -1, y: 1, fx: -1, fy: 2 };

    beforeEach(() => {
      LeftWall.primaryDispersion = 0.6;
      LeftWall.friction = 0.8;
      LeftWall.apply(object);
    });

    it('reverts horizontal force and applies primary force dispersion', () => {
      expect(object.fx).toEqual(1 * 0.6);
    });

    it('puts the object back to the right of the left boundary', () => {
      expect(object.x).toEqual(0);
    })

    it('applies friction to vertical force', () => {
      expect(object.fy).toEqual(2 * 0.8);
    });
  });
})

import TopWall from './TopWall.js';
import { dimensions } from './utilities.js';

describe('TopWallSpec', () => {
  describe('.apply', () => {
    let object = { x: 1, y: -1, fx: 1, fy: -2 };

    beforeEach(() => {
      TopWall.primaryDispersion = 0.6;
      TopWall.friction = 0.8;
      TopWall.apply(object);
    });

    it('reverts vertical force and applies primary force dispersion', () => {
      expect(object.fy).toEqual(2 * 0.6);
    });

    it('puts the object back below the top boundary', () => {
      expect(object.y).toEqual(0);
    })

    it('applies friction to horizontal force', () => {
      expect(object.fx).toEqual(1 * 0.8);
    });
  });
})

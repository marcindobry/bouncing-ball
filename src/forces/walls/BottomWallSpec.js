import BottomWall from './BottomWall.js';
import { dimensions } from './utilities.js';

describe('BottomWallSpec', () => {
  describe('.apply', () => {
    let dimension = 100;
    let object = { x: 101, y: 101, fx: 1, fy: 2 };

    beforeEach(() => {
      let $browser = { clientWidth: dimension, clientHeight: dimension };
      BottomWall.worldDimensions = dimensions($browser);
      BottomWall.primaryDispersion = 0.6;
      BottomWall.friction = 0.8;
      BottomWall.apply(object);
    });

    it('reverts vertical force and applies primary force dispersion', () => {
      expect(object.fy).toEqual(-2 * 0.6);
    });

    it('puts the object back above the bottom boundary', () => {
      expect(object.y).toEqual(dimension);
    })

    it('applies friction to horizontal force', () => {
      expect(object.fx).toEqual(1 * 0.8);
    });
  });
})

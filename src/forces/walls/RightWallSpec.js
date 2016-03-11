import RightWall from './RightWall.js';
import { dimensions } from './utilities.js';

describe('RightWallSpec', () => {
  describe('.apply', () => {
    let dimension = 100;
    let object = { x: 101, y: 1, fx: 1, fy: 2 };

    beforeEach(() => {
      let $browser = { clientWidth: dimension, clientHeight: dimension };
      RightWall.worldDimensions = dimensions($browser);
      RightWall.primaryDispersion = 0.6;
      RightWall.friction = 0.8;
      RightWall.apply(object);
    });

    it('reverts horizontal force and applies primary force dispersion', () => {
      expect(object.fx).toEqual(-1 * 0.6);
    });

    it('puts the object back to the left of the right boundary', () => {
      expect(object.x).toEqual(dimension);
    })

    it('applies friction to vertical force', () => {
      expect(object.fy).toEqual(2 * 0.8);
    });
  });
})

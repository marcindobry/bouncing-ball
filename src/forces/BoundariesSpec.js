import Boundaries from './Boundaries.js';

describe('Boundaries', () => {
  let leftWall = { apply: sinon.spy() };
  let rightWall = { apply: sinon.spy() };
  let walls = [leftWall, rightWall];

  describe('.apply', () => {
    beforeEach(() => Boundaries.walls = sinon.stub().returns(walls));

    it('calls apply on all walls', () => {
      walls.forEach((wall) => expect(wall.calledOnce))
    });
  });
});

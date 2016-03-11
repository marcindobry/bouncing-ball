import Ball from './Ball.js';

describe('Ball', () => {
  let x = 10;
  let y = 20;
  let $ballElement = { foo: 'bar' };
  let move = sinon.stub();
  let ballRenderer = sinon.stub().returns({ $ballElement: $ballElement, move: move });
  let force = sinon.stub().returns({ fx: 1, fy: 2 });
  let ball = new Ball(x, y, force, ballRenderer);

  describe('#contructor', () => {
    it('creates new ball renderer', () => {
      expect(ballRenderer.calledWith(ball));
    });

    it('initializes x and y with passed values', () => {
      expect(ball.x).toEqual(x);
      expect(ball.y).toEqual(y);
    });

    it('applies the passed force', () => {
      expect(force.calledWith(ball));
    });
  });

  describe('#move', () => {
    beforeEach(() => {
      ball = new Ball(x, y, force, ballRenderer);
      ball.fx = 2;
      ball.fy = 4;
      ball.move()
    });

    it('applies fx to x', () => expect(ball.x).toEqual(12));
    it('applies fy to y', () => expect(ball.y).toEqual(24));
    it('calls #move on renderer', () => expect(move.calledOnce));
  });

  describe('#applyForces', () => {
    let gravity = sinon.stub();
    let wind = sinon.stub();
    let forces = [gravity, wind];

    beforeEach(() => {
      ball.move = sinon.stub();
      ball.applyForces(...forces)
    });

    it('calls apply on each force once', () => {
      forces.forEach((force) => expect(force.calledOnce));
    })

    it('calls move on ball', () => {
      expect(ball.move.calledOnce)
    });
  });

  describe('#render', () => {
    it('returns renderer.$ballElement', () => expect(ball.render()).toEqual($ballElement))
  })
});

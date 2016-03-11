import BallRenderer from './BallRenderer.js'

describe('BallRenderer', () => {
  let ball = { x: 20, y: 10 };
  let ballRenderer = new BallRenderer(ball);

  beforeEach(() => ballRenderer.radius = sinon.stub().returns(2));

  describe('#top', () => {
    it('returns the y position minus the radius as the center of a ball', () => {
      expect(ballRenderer.top()).toEqual(8);
    });
  });

  describe('#left', () => {
    it('returns the x position minus the radius as the center of a ball', () => {
      expect(ballRenderer.left()).toEqual(18);
    });
  });

  describe('#diameter', () => {
    it('returns double the radius', () => expect(ballRenderer.diameter()).toEqual(4));
  });

  describe('#move', () => {
    beforeEach(() => {
      ballRenderer.top = sinon.stub().returns(5);
      ballRenderer.left = sinon.stub().returns(7);
      ballRenderer.move();
    });

    it('sets the $ballElements top css attribute to #top px', () => {
      expect(ballRenderer.$ballElement.css('top')).toEqual('5px');
    });

    it('sets the $ballElements left css attribute to #left px', () => {
      expect(ballRenderer.$ballElement.css('left')).toEqual('7px');
    });
  });
});

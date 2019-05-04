const stars = require('./hw1');

describe('hw1', () => {
  it('should return correct answer when n = 1', () => {
    expect(stars(1)).toEqual(['*']);
  });

  it('should return correct answer when n = 1', () => {
    expect(stars(5)).toEqual(['*', '**', '***', '****', '*****']);
  });

  it('should return correct answer when n = 1', () => {
    expect(stars(500)).toEqual('n 的數字僅能在 1 至 30 之間');
  });
});

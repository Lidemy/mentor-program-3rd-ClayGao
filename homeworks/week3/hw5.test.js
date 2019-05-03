const add = require('./hw5');

describe('hw5', () => {
  it('should return correct answer when a=111111111111111111111111111111111111 and b=111111111111111111111111111111111111', () => {
    expect(add('111111111111111111111111111111111111', '111111111111111111111111111111111111')).toBe('222222222222222222222222222222222222');
  });

  it('should return correct answer when a=99999 and b=99999', () => {
    expect(add('99999', '99999')).toBe('199998');
  });

  it('should return correct answer when a=99999 and b=99999', () => {
    expect(add('99999', '997')).toBe('100996');
  });
});

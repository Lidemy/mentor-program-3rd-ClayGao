const alphaSwap = require('./hw2');

describe('hw2', () => {
  it('should return correct answer when str = nick', () => {
    expect(alphaSwap('nick')).toBe('NICK');
  });

  it('should return correct answer when str = ClAy is bEst', () => {
    expect(alphaSwap('ClAy is bEst 557987,!#@$@@%@@')).toBe('cLaY IS BeST 557987,!#@$@@%@@');
  });

  it('should return correct answer when str = haHahAHA', () => {
    expect(alphaSwap('haHahAHA')).toBe('HAhAHaha');
  });
});

const isPalindromes = require('./hw4');

describe('hw4', () => {
  it('should return correct answer when str = abcdcba', () => {
    expect(isPalindromes('abcdcba')).toBe(true);
  });

  it('should return correct answer when str = abcdcba', () => {
    expect(isPalindromes('CLay like to be ot ekil yalc')).toBe(false);
  });

  it('should return correct answer when str = abcdcba', () => {
    expect(isPalindromes('CLay like to be ot ekil yalcCLay like to be ot ekil yalcCLay like to be ot ekil yalcCLay like to be ot ekil yalc'))
      .toBe('字串長度需小於 100 個字元');
  });
});

const isPrime = require('./hw3');

describe('hw3', () => {
  it('should return correct answer when n = 45456456', () => {
    expect(isPrime(45456456)).toBe('數字請幫我設在 1 至 100000 之間');
  });

  it('should return correct answer when n = 1', () => {
    expect(isPrime(1)).toBe(false);
  });

  it('should return correct answer when n = 3', () => {
    expect(isPrime(3)).toBe(true);
  });

  it('should return correct answer when n = 9977', () => {
    expect(isPrime(9977)).toBe(false);
  });

  it('should return correct answer when n = 1457', () => {
    expect(isPrime(1457)).toBe(false);
  });

  it('should return correct answer when n = 11', () => {
    expect(isPrime(11)).toBe(true);
  });

  it('should return correct answer when n = 17', () => {
    expect(isPrime(17)).toBe(true);
  });

  it('should return correct answer when n = 99578', () => {
    expect(isPrime(99578)).toBe(false);
  });

  it('should return correct answer when n = 99578', () => {
    expect(isPrime(995878)).toBe('數字請幫我設在 1 至 100000 之間');
  });
});

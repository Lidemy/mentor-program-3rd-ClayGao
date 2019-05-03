function isPrime(n) {
  if (n > 1 && n <= 100000) {
    for (let i = 2; i <= n; i += 1) { // 2 是最小的質數，所以從 2 開始
      if (n % i === 0) {
        if (i !== n) return false;
      }
    }
    return true;
  } if (n === 1) {
    return false;
  } return '數字請幫我設在 1 至 100000 之間';
}


module.exports = isPrime;

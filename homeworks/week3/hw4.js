function isPalindromes(str) {
  let strReverse = '';
  if (str.length <= 100) {
    for (let i = str.length - 1; i >= 0; i -= 1) {
      strReverse += str[i];
    }
    if (str === strReverse) {
      return true;
    }
    return false;
  } return '字串長度需小於 100 個字元';
}


module.exports = isPalindromes;

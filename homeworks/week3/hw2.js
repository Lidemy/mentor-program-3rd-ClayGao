function alphaSwap(str) {
  let result = '';
  let aCode = 0;
  for (let n = 0; n < str.length; n += 1) {
    aCode = str.charCodeAt(n);
    if (aCode >= 65 && aCode <= 90) {
      aCode += 32;
    } else if (aCode >= 97 && aCode <= 122) {
      aCode -= 32;
    }
    aCode = String.fromCharCode(aCode);
    result += aCode;
  }
  console.log(result);
  return result;
}

module.exports = alphaSwap;

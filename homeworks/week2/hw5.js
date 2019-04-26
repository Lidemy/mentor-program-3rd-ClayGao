function join(str, concatStr) {
  let newStr = '';
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    if (i < (len - 1)) {
      newStr += str[i] + concatStr;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

function repeat(str1, times) {
  let newStr1 = '';
  for (let n = 0; n < times; n += 1) {
    newStr1 += str1;
  }
  return newStr1;
}

console.log(join(['a', 'b', 'c'], '!'));
console.log(repeat('a', 5));

// 陣列可直接當參數代入

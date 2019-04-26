function reverse(str) {
  const strArray = str.split('');
  const n = strArray.length - 1;
  let newStr = '';
  for (let i = n; i >= 0; i -= 1) {
    newStr += strArray[i];
  }
  return newStr;
}
console.log(reverse('1,2,3,2,1'));

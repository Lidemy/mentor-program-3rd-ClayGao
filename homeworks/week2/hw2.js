function capitalize(str) {
  let newStr = ''; // 建立一個變數內含字串為空
  const strArray = str.split('');
  strArray.splice(0, 1, strArray[0].toUpperCase());
  for (let i = 0; i < strArray.length; i += 1) {
    newStr += strArray[i];
  }
  return newStr;
}
console.log(capitalize('hi i am clay'));

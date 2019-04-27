function search(arr, x) {
  const randomMath = Math.floor(Math.random() * (arr.length));
  console.log(randomMath);
  if ([randomMath] === x) {
    return randomMath;
  }
  if (arr[randomMath] < x) {
    for (let i = randomMath; i < arr.length; i += 1) {
      if (arr[i] === x) { return i; }
    }
  } else if (arr[randomMath] > x) {
    for (let i = randomMath; i >= 0; i -= 1) {
      if (arr[i] === x) { return i; }
    }
  }
  return -1;
}

console.log(search([1, 3, 10, 14, 39, 55, 68, 98, 150, 200, 210], 800));
/*
while (arr[randomMath] !== x){
    randomMath--
} return i
*/

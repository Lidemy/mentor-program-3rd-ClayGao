function printStars(n) {
  if (n >= 1 && n <= 30) {
    for (let i = 0; i < n; i += 1) {
      console.log('*');
    }
  } else {
    console.log('必須至少是 1 且不得超過 30');
  }
}
printStars(9);

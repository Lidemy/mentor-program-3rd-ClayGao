function stars(n) {
  if (n >= 1 && n <= 30) {
    const result = [];
    let star = '';
    for (let i = 0; i < n; i += 1) {
      star = `${star}*`;
      result.push(star);
    }
    console.log(n);
    console.log(result);
    return result;
  } return 'n 的數字僅能在 1 至 30 之間';
}

module.exports = stars;

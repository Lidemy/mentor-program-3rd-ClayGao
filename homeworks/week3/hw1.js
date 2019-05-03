function stars(n) {
  const result = [];
  let star = '';
  for (let i = 0; i < n; i += 1) {
    star = `${star}*`;
    result.push(star);
  }
  console.log(n);
  console.log(result);
  return result;
}

module.exports = stars;

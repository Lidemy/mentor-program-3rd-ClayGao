function add(a, b) {
  const x = a.split('');
  const y = b.split('');

  if (x.length > y.length) {
    const gap = x.length - y.length;
    for (let i = 0; i < gap; i += 1) {
      y.unshift('0');
    }
  } else if (x.length < y.length) {
    const gap = y.length - x.length;
    for (let i = 0; i < gap; i += 1) {
      x.unshift('0');
    }
  }
  const result = [];
  let num = 0;
  let addN = 0;
  for (let i = x.length - 1; i >= 0; i -= 1) {
    num = Number(x[i]) + Number(y[i]) + addN;
    addN = 0;

    if (num >= 10) {
      if (i > 0) {
        addN += 1;
        num -= 10;
        result.unshift(num);
      } else {
        addN += 1;
        num -= 10;
        result.unshift(num);
        result.unshift(addN);
        console.log(result);
      }
    } else if (num < 10) {
      result.unshift(num);
    }
  }
  let answer = '';
  for (let i = 0; i < result.length; i += 1) {
    answer += String(result[i]);
  }
  return answer;
}

module.exports = add;


/*
    if ( i > 0) {
      if ( num >= 10) {
        addN += 1
        num -= 10
        result.unshift(num)
      } else if (num < 10) {
        result.unshift(num)
      }
    } else {
      if ( num >= 10) {
        addN += 1
        num -= 10
        result.unshift(num)
        result.unshift(addN)
      } else if (num < 10) {
        result.unshift(num)
      }
    }
    */

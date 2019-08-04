
const sum = document.getElementById('screen');


let num = '';

let standBy = 0;


const equals = document.querySelector('.toEqual');


document.getElementById('keyinBlock').addEventListener('click', (e) => {
  if (e.target.name === 'number') {
    num += (e.target.value);
    sum.setAttribute('value', num);
  }
  if (e.target.name === 'plus') { // 加法
    equals.setAttribute('name', e.target.name);
    standBy += Number(num);
    sum.setAttribute('value', standBy); // 這樣就有了連加功能了
    num = ''; // 再次輸入數字時為空
  }
  if (e.target.name === 'minus') { // 減法
    equals.setAttribute('name', e.target.name);
    if (standBy === 0) {
      standBy = Number(num);
      sum.setAttribute('value', standBy); // 這樣就有了連加功能了
      num = ''; // 再次輸入數字時為空
    } else {
      standBy -= Number(num);
      if (standBy >= 0) {
        sum.setAttribute('value', standBy); // 這樣就有了連減功能了
        num = ''; // 再次輸入數字時為空
      } else if (standBy < 0) {
        standBy = Math.abs(standBy);
        sum.setAttribute('value', `${standBy}-`); // 這樣就有了連減功能了
        standBy *= (-1);
        num = ''; // 再次輸入數字時為空
      }
    }
  }
  if (e.target.name === 'times') { // 乘法
    equals.setAttribute('name', e.target.name);
    if (Number(num) === 0) { num += 1; }
    if (standBy === 0) { standBy += 1; }
    standBy *= Number(num);
    sum.setAttribute('value', standBy); // 這樣就有了連乘功能了
    num = ''; // 再次輸入數字時為空
  }
  if (e.target.name === 'divide') { // 除法
    equals.setAttribute('name', e.target.name);
    if (Number(num) === 0) { num += 1; }
    if (standBy === 0) {
      standBy = Number(num);
      sum.setAttribute('value', standBy);
      num = ''; // 再次輸入數字時為空
    } else {
      standBy /= Number(num);
      sum.setAttribute('value', standBy); // 這樣就有了連除功能了
      num = ''; // 再次輸入數字時為空
    }
  }
  if (e.target.name === 'AC') { //
    standBy = 0;
    sum.setAttribute('value', standBy);
    num = ''; // 再次輸入數字時為空
  }
});

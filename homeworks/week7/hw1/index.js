const bgChange = document.querySelector('body');
let i = -1;
const sec = Math.random() * 3000;

window.addEventListener('click', () => {
  if (i === -1) {
    alert('你太早按了，失敗');
    // e.preventDefault()

    const btn = document.createElement('input');
    btn.setAttribute('type', 'button');
    btn.setAttribute('value', '再玩一次');
    btn.setAttribute('class', 'btn');
    btn.setAttribute('onclick', 'document.location.reload()');
    document.querySelector('.message').appendChild(btn);
    i -= 2;
  }
});

setTimeout(() => {
  i += 1;
  // console.log(i)
  if (i >= 0) {
    bgChange.classList.add('bg-red');
    window.addEventListener('click', (e) => {
      if (i >= 0) {
        const a = e.timeStamp;
        const grade = (a - sec) / 1000;
        if (grade <= 1.5) {
          alert(`成功了 ! 反應時間為 ${grade.toFixed(2)} 秒 !`);
        } else if (grade > 1.5) {
          alert('你太晚按了，失敗');
        }


        const btn = document.createElement('input');
        btn.setAttribute('type', 'button');
        btn.setAttribute('value', '再玩一次');
        btn.setAttribute('class', 'btn');
        btn.setAttribute('onclick', 'document.location.reload()');
        document.querySelector('.message').appendChild(btn);

        i -= 2;
      }
    });
  }
}, sec);

const bgChange = document.querySelector('body');
let checkpoint = 0;// 0 為遊戲關閉的狀態
const sec = Math.random() * 3000;

window.addEventListener('click', () => {
  if (checkpoint === 0) {
    alert('你太早按了，失敗');

    const btn = document.createElement('input');
    btn.setAttribute('type', 'button');
    btn.setAttribute('value', '再玩一次');
    btn.setAttribute('class', 'btn');
    btn.setAttribute('onclick', 'document.location.reload()');
    document.querySelector('.message').appendChild(btn);
    checkpoint -= 2;
  }
});

setTimeout(() => {
  checkpoint += 1;
  if (checkpoint === 1) { // 1 為遊戲開啟的狀態
    bgChange.classList.add('bg-red');
    window.addEventListener('click', (e) => {
      if (checkpoint > 0) {
        const runningTimes = e.timeStamp;
        const grade = (runningTimes - sec) / 1000;
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

        checkpoint -= 2;
      }
    });
  }
}, sec);

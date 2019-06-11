const background = document.querySelector('body');
const button = document.querySelector('.btn');
const luckyDraw = document.querySelector('.lucky__draw');
const request = new XMLHttpRequest();


// 按鈕對於鼠標的各類反應


function pointButton() {
  button.value = '`･∀･';
  luckyDraw.innerText = '好緊張...';
}
function moveOutButton() {
  button.value = '';
  luckyDraw.innerText = '快點抽快點抽 ! ';
}
function clickButton() {
  button.value = '｡◕∀◕｡';
  luckyDraw.innerText = '蹦 ! ';
}

function getLottery() {
  request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true);
  request.send();
  button.removeEventListener('mouseout', moveOutButton);
  button.value = 'Ф∇Ф..';
  button.removeEventListener('mouseup', getLottery);
  console.log(request.responseText);
}

button.addEventListener('mouseover', pointButton);
button.addEventListener('mouseout', moveOutButton);
button.addEventListener('mousedown', clickButton);
button.addEventListener('mouseup', getLottery);

// 各個獎項的函式
function gotPrize1() {
  background.classList.add('prize1');
  button.classList.add('btn__prize1');
  luckyDraw.innerText = 'ヽ(✿ﾟ▽ﾟ)ノ ! 恭喜你中頭獎了！日本東京來回雙人遊！';
  button.removeEventListener('mouseover', pointButton);
  button.removeEventListener('mouseout', moveOutButton);
  button.removeEventListener('mousedown', clickButton);
  button.value = '✿ﾟ▽ﾟ';
}

function gotPrize2() {
  background.classList.add('prize2');
  button.classList.add('btn__prize2');
  luckyDraw.innerText = '(ﾉ>ω<)ﾉ 二獎！90 吋電視一台！';
  button.removeEventListener('mouseover', pointButton);
  button.removeEventListener('mouseout', moveOutButton);
  button.removeEventListener('mousedown', clickButton);
  button.value = '>ω<';
}

function gotPrize3() {
  background.classList.add('prize3');
  button.classList.add('btn__prize3');
  luckyDraw.innerText = '(,,ﾟДﾟ) 恭喜你抽中三獎：知名YouTuber 簽名握手會入場券一張，Bang!';
  button.removeEventListener('mouseover', pointButton);
  button.removeEventListener('mouseout', moveOutButton);
  button.removeEventListener('mousedown', clickButton);
  button.value = ',,ﾟДﾟ';
}

function gotNone() {
  background.classList.add('prize__none');
  button.classList.add('btn__noprize');
  luckyDraw.innerText = '(•ㅂ•)/ 銘謝惠顧!';
  button.removeEventListener('mouseover', pointButton);
  button.removeEventListener('mouseout', moveOutButton);
  button.removeEventListener('mousedown', clickButton);
  button.value = '๑´ㅂ`๑';
}

// 送出 request 並判斷 response 為何，而採用相對應的函式
request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    const json = JSON.parse(request.responseText);

    if (json.prize === 'FIRST') {
      gotPrize1();
    } else if (json.prize === 'SECOND') {
      gotPrize2();
    } else if (json.prize === 'THIRD') {
      gotPrize3();
    } else if (json.prize === 'NONE') {
      gotNone();
    } else { alert('請重新整理！'); }
  } else {
    alert('請重新整理 ! ');
  }
};

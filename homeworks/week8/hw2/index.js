const request = new XMLHttpRequest();
const URL = 'https://lidemy-book-store.herokuapp.com/posts';
const msgBoard = document.querySelector('.msg__board');
const submit = document.querySelector('form > .btn');
const msgText = document.querySelector('.msg__text');
const fromEnd = document.querySelector('.end');
const fromStart = document.querySelector('.start');
const last = document.querySelector('.last');
const next = document.querySelector('.next');
let limit = 20;
let scope = 0;

// 撈取伺服器資料
function runRequest(position, num) {
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const response = JSON.parse(request.responseText);
      for (let i = num; i < response.length; i += 1) {
        const newMsgBlock = document.createElement('div');
        newMsgBlock.classList.add('msg__block');

        const newMsg = document.createElement('div');
        newMsg.classList.add('msg__display');

        newMsg.innerText = `${response[i].id} 樓說 : 
                                                ${response[i].content}`;
        newMsgBlock.appendChild(newMsg);
        msgBoard.appendChild(newMsgBlock);
      }
    } else {
      alert('網頁出了點問題，重新整理一下唷 ! ');
    }
  };
  request.open('GET', `${URL}${position}`, true);
  request.send();
}


/** 以下為 "<" ( 上一頁 ) 與 ">" ( 下一頁 ) 的類型函式
* 分別有「 從尾端開始 」版本的上一頁與下一頁
* 與 「 從頭開始 」版本的上一頁與下一頁
* 共四種狀況，所以共四個函式
*/

// 換頁功能
function changePages(msgBlocks, startOrEnd) {
  msgBoard.innerHTML = '';
  limit += msgBlocks;
  scope += msgBlocks;
  runRequest(`?_limit=${limit}&_sort=id&_order=${startOrEnd}`, scope);
}

// 「 從尾端開始 」版本的上一頁與下一頁
function lastForEnd(e) {
  if (limit !== 20) {
    changePages(-20, 'desc');
  } else {
    e.preventDefault();
  }
}
function nextForEnd() {
  changePages(20, 'desc');
}

// 「 從頭開始 」版本的上一頁與下一頁
function lastForStart(e) {
  if (limit !== 20) {
    changePages(-20, 'asc');
  } else {
    e.preventDefault();
  }
}
function nextForStart() {
  changePages(20, 'asc');
}


// 當我點擊 「 從尾端開始 」時會發生的狀況，包括加入上面的上下頁功能
fromEnd.addEventListener('click', () => {
  limit = 20;
  scope = 0;
  msgBoard.innerHTML = '';
  runRequest('?_limit=20&_sort=id&_order=desc', 0);
  last.removeEventListener('click', lastForEnd);
  next.removeEventListener('click', nextForEnd);
  last.removeEventListener('click', lastForStart);
  next.removeEventListener('click', nextForStart);
  last.addEventListener('click', lastForEnd);
  next.addEventListener('click', nextForEnd);
});

// 當我點擊 「 從尾端開始 」時會發生的狀況，包括加入上面的上下頁功能
fromStart.addEventListener('click', () => {
  limit = 20;
  scope = 0;
  msgBoard.innerHTML = '';
  runRequest('?_limit=20&_sort=id&_order=asc', 0);
  last.removeEventListener('click', lastForEnd);
  next.removeEventListener('click', nextForEnd);
  last.removeEventListener('click', lastForStart);
  next.removeEventListener('click', nextForStart);
  last.addEventListener('click', lastForStart);
  next.addEventListener('click', nextForStart);
});

// POST，送出表單功能
submit.addEventListener('click', () => {
  if (msgText.value !== '' && msgText.value.length >= 6) {
    const msgObj = { content: msgText.value };
    const levelMsg = JSON.stringify(msgObj);
    request.open('POST', `${URL}`, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(levelMsg);
    msgText.value = '';
    limit = 20;
    scope = 0;
    alert('留言成功 ! ');

    // 留言不夠六字也要紫薯布丁
  } else {
    alert('內容不可以少於 6 個字元唷 ! ');
  }
});

// 第一次讀取頁面時，撈資料到留言板上，預設是「 從尾端開始撈 」
runRequest('?_limit=20&_sort=id&_order=desc', 0);
last.addEventListener('click', lastForEnd);
next.addEventListener('click', nextForEnd);

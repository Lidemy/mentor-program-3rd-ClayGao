const enterValue = document.querySelectorAll('.default');
const enterBlock = document.querySelectorAll('.entering');

for (let i = 0; i < enterValue.length; i += 1) { // 幫每個 block 都掛上監聽器
  enterValue[i].addEventListener('click', (e) => { // *點選時清除預設並變成輸入狀態
    if (e.target.value === '您的電子郵件' || e.target.value === '您的回答') {
      e.target.value = ''; // 滑鼠點擊的時候移除該內容 removeAttribute 不使用，使其為空，這個要擺第一個
      e.target.classList.add('default__entering'); // 使輸入的字為黑色
      e.stopImmediatePropagation();
    }
  });

  enterValue[i].addEventListener('keydown', (e) => { // *將已經被提示，後來補上文字的 block 恢復白背景
    if (e.key) { // 只要你 key 入字就會恢復白色背景
      for (let j = 0; j < enterValue.length; j += 1) {
        if (e.target.value === '您的電子郵件' || e.target.value === '您的回答' || e.target.value !== '') {
          enterValue[j].classList.remove('default__warning');// 移除底線與背景的紅色
          enterBlock[j].classList.remove('entering__warning');// 移除輸入框的紅色
          if (enterBlock[j].getAttribute('name') === 'warning') { // 加了開關就不會出錯了，是新想到的辦法，但實際原因還在研究
            enterBlock[j].removeChild(document.querySelector('.newTips'));
            enterBlock[j].setAttribute('name', 'safe');
          }
        }
      }
    }
  });
}

window.addEventListener('click', () => { // *當我點選空白處時，會逐步檢查有被點過但內容為空的 block，提示警告
  for (let i = 0; i < (enterValue.length - 1); i += 1) { // 逐步檢查開始，不包含最後一項
    if (enterValue[i].value === '') {
      enterValue[i].classList.remove('default__entering');// 移除原本輸入的黑色字
      enterValue[i].classList.add('default__warning');// 內框警告，讓底線與背景變紅色
      enterBlock[i].classList.add('entering__warning');// block 框框警告，讓 block 背景變紅色
      const tips = document.createElement('div');
      if (enterBlock[i].getAttribute('name') === 'safe' || enterBlock[i].getAttribute('name') === null) { // 加了開關就不會出錯了，是新想到的辦法，但實際原因還在研究
        tips.innerText = '請填寫此欄';// 加字提示
        tips.classList.add('newTips');
        enterBlock[i].appendChild(tips);
        enterBlock[i].setAttribute('name', 'warning');
      }
      if (i === 0) {
        enterValue[i].value = '您的電子郵件';// 目前尚不知道這樣寫與 enterBlock[i].setAttribute("value","您的電子郵件") 的根本差別，只知道後者若為 null 會補上
      } else enterValue[i].value = '您的回答';
    }
  }
}, true);

document.querySelector('.submit_btn').addEventListener('click', (e) => {
  let ans = 0;
  for (let i = 0; i < enterValue.length; i += 1) {
    if (enterValue[i].value === '您的回答' || enterValue[i].value === '您的電子郵件' || enterValue[i].value === '') {
      ans -= 1;
    } else {
      console.log(enterValue[i].value);
    }
  }
  if (ans < 0) {
    alert('有問題尚未填寫');
    e.preventDefault();// 偵測到有問題尚未填寫，阻擋提交
  } else {
    alert('填寫成功');
  }
});

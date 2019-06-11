const request = new XMLHttpRequest();
const clientID = 'qn5gw8fvspu3jaw1lqymckhb9zqyqx';
const board = document.querySelector('.game__board');

request.onload = function () {
  const streams = JSON.parse(request.response);
  if (request.status >= 200 && request.status < 400) {
    for (let i = 0; i < 20; i += 1) {
      const lives = document.createElement('div');

      // 將排行第一名和第二名的實況放在最前面，並加大尺寸 ( 套用 lives__big )
      if (i <= 1) {
        lives.classList.add('lives__big');
      } else {
        lives.classList.add('lives'); // 第三名之後的就套一般尺寸
      }

      // 擷取該實況主的 Logo
      const logo = document.createElement('img');
      logo.setAttribute('src', `${streams.streams[i].channel.logo}`);
      logo.classList.add('logo');

      // 擷取該實況台名稱，與該實況現下的節目名稱
      const livesText = document.createElement('div');
      livesText.classList.add('lives__text');
      livesText.innerText = `${streams.streams[i].channel.name} 
                                ${streams.streams[i].channel.status}`;

      // 擷取該實況主的現下實況截圖，並加入連結
      lives.style.backgroundImage = `url('${streams.streams[i].preview.large}')`;
      lives.style.backgroundSize = '100%';
      lives.style.backgroundRepeat = 'no-repeat';
      lives.style.cursor = 'pointer';
      lives.setAttribute('onclick', `location.href="${streams.streams[i].channel.url}"`);

      // 都截取好之後，一個接一個插入，這邊習得相對於 append 的語法 prepend
      livesText.prepend(logo);
      lives.appendChild(livesText);
      board.appendChild(lives);
    }
  } else {
    alert('出了點問題，麻煩重新整理一下唷 ! ');
  }
};
request.open('GET', `https://api.twitch.tv/kraken/streams?client_id=${clientID}&game=League%20of%20Legends&stream_type=live`, true);
request.send();

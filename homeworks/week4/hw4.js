const request = require('request');


request({
  url: 'https://api.twitch.tv/helix/games/top',
  method: 'GET',
  headers: {
    'Client-ID': 'qn5gw8fvspu3jaw1lqymckhb9zqyqx',
  },
}, (error, response, body) => {
  const obj = JSON.parse(body);
  for (let i = 0; i < obj.data.length; i += 1) { console.log(obj.data[i].id, obj.data[i].name); }
});

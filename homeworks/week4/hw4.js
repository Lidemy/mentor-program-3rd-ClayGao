const request = require('request');

const clientID = 'qn5gw8fvspu3jaw1lqymckhb9zqyqx';

request({
  url: 'https://api.twitch.tv/helix/games/top',
  method: 'GET',
  headers: {
    'Client-ID': clientID,
  },
}, (error, response, body) => {
  const obj = JSON.parse(body);
  for (let i = 0; i < obj.data.length; i += 1) { console.log(obj.data[i].id, obj.data[i].name); }
});

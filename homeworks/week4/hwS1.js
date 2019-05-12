const request = require('request');

const clientID = 'qn5gw8fvspu3jaw1lqymckhb9zqyqx';

request({
  url: 'https://api.twitch.tv/helix/streams?game_id=21779&sort=views&first=100',
  method: 'GET',
  headers: {
    'Client-ID': clientID,
  },
}, (error, response, body) => {
  const obj = JSON.parse(body);

  const afterStr = obj.pagination.cursor;

  for (let i = 0; i < obj.data.length; i += 1) {
    console.log(`ID : ${obj.data[i].id}   Name : ${obj.data[i].user_name}   Views : ${obj.data[i].viewer_count}`);
  }
  request({
    url: `https://api.twitch.tv/helix/streams?game_id=21779&sort=views&first=100&after=${afterStr}`,
    method: 'GET',
    headers: {
      'Client-ID': clientID,
    },
  }, (error2, response2, body2) => {
    const obj2 = JSON.parse(body2);

    for (let i = 0; i < obj2.data.length; i += 1) {
      console.log(`ID : ${obj2.data[i].id}   Name : ${obj2.data[i].user_name}   Views : ${obj2.data[i].viewer_count}`);
    }
  });
});

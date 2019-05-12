const request = require('request');
const process = require('process');

const clientID = 'qn5gw8fvspu3jaw1lqymckhb9zqyqx';
const gameName = process.argv[2];


request({
  url: `https://api.twitch.tv/helix/games?name=${gameName}`,
  method: 'GET',
  headers: {
    'Client-ID': clientID,
  },
}, (error, response, body) => {
  const gameInfo = JSON.parse(body);
  console.log(`You are searching ${gameName} now...`);
  const gameID = gameInfo.data[0].id;

  request({
    url: `https://api.twitch.tv/helix/streams?game_id=${gameID}&sort=views&first=100`,
    method: 'GET',
    headers: {
      'Client-ID': clientID,
    },
  }, (error2, response2, body2) => {
    const obj = JSON.parse(body2);
    const afterStr = obj.pagination.cursor;
    for (let i = 0; i < obj.data.length; i += 1) {
      console.log(`ID : ${obj.data[i].id}   Name : ${obj.data[i].user_name}   Views : ${obj.data[i].viewer_count}`);
    }
    request({
      url: `https://api.twitch.tv/helix/streams?game_id=${gameID}&sort=views&first=100&after=${afterStr}`,
      method: 'GET',
      headers: {
        'Client-ID': clientID,
      },
    }, (error3, response3, body3) => {
      const obj2 = JSON.parse(body3);

      for (let i = 0; i < obj2.data.length; i += 1) {
        console.log(`ID : ${obj2.data[i].id}   Name : ${obj2.data[i].user_name}   Views : ${obj2.data[i].viewer_count}`);
      }
    });
  });
});

const request = require('request');


request('https://lidemy-book-store.herokuapp.com/books?_limit=10', (error, response, body) => {
  const obj = JSON.parse(body);
  for (let i = 0; i < obj.length; i += 1) {
    console.log(`ID : ${obj[i].id} / 書名：${obj[i].name}`);
  }
});

const request = require('request');
const process = require('process');


if (process.argv[2] === 'list') {
  request('https://lidemy-book-store.herokuapp.com/books?_limit=20', (error, response, body) => {
    const obj = JSON.parse(body);
    for (let i = 0; i < obj.length; i += 1) {
      console.log(`ID : ${obj[i].id} / 書名：${obj[i].name}`);
    }
  });
}


if (process.argv[2] === 'read') {
  request(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`, (error, response, body) => {
    const obj = JSON.parse(body);
    console.log(`ID : ${obj.id} / 書名：${obj.name}`);
  });
}

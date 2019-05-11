const request = require('request');
const process = require('process');


if (process.argv[2] === 'list') {
  request('https://lidemy-book-store.herokuapp.com/books?_limit=20', (error, response, body) => {
    const json = JSON.parse(body);
    console.log(json);
  });
}


if (process.argv[2] === 'read') {
  request(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`, (error, response, body) => {
    const json = JSON.parse(body);
    console.log(json);
  });
}

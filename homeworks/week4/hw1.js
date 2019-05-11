const request = require('request');


request('https://lidemy-book-store.herokuapp.com/books?_limit=10', (error, response, body) => {
  const json = JSON.parse(body);


  console.log(json);
});

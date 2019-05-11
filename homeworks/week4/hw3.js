const request = require('request');
const process = require('process');


if (process.argv[2] === 'list') {
  request('https://lidemy-book-store.herokuapp.com/books?_limit=20', (error, response, body) => {
    const json = JSON.parse(body);
    console.log(json);
  });
}


if (process.argv[2] === 'read') {
  // console.log (process.argv[3])
  request.get(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`, (error, response, body) => {
    const json = JSON.parse(body);
    console.log(json);
    /*
      const obj = json
      for (var i = 0; i < obj.length; i++) {
          if (obj[i].id === Number(process.argv[3])) {
              console.log(obj[i])
          }
      }
      */
  });
}


if (process.argv[2] === 'delete') {
  // console.log (process.argv[3])
  request.delete(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`, (response) => {
    // const json = JSON.parse(body)
    console.log(response.statusCode);
  });
}


if (process.argv[2] === 'create') {
  // console.log (process.argv[3])
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: {
        name: process.argv[3],
      },
    },
  );
}


if (process.argv[2] === 'update') {
  // console.log (process.argv[3])
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      form: {
        name: process.argv[4],
      },
    },
  );
}

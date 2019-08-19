const path = require('path');

module.exports = {
  entry: './src/index.js', // 引入的檔案
  output: {
    path: path.resolve(__dirname, 'dist'), // 輸出的位置
    filename: 'index.bundle.js', // * html 要引入的檔案
  },
};

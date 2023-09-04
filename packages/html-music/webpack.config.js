const path = require('path');

module.exports = {
  entry: './js/entry.js',
  output: {
    filename: './js/entry.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: `localhost:4005`,
  },
};
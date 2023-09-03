const fs = require('fs-extra');
const webpack = require('webpack');
const config = require('./webpack.config.js');

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err || stats.toString());
    return;
  }
  console.log('Webpack build completed successfully.');

  try {
    fs.copySync('./index.html', './dist/index.html');
    fs.copySync('./js', './dist/js');
    fs.copySync('./styles', './dist/styles');
    fs.copySync('./music', './dist/music');
    fs.copySync('./images', './dist/images');
    console.log('Files have been copied to dist folder.');
  } catch (err) {
    console.error(err);
  }
});
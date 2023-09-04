const path = require('path');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './js/entry.js',
  output: {
    filename: './js/entry.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: `localhost:4007`,
  },
  devServer: {
    port: 4007,
    static: './dist',
    compress: true,
    // 可选配置
    historyApiFallback: true, // 开启 HTML5 History API 重定向
    hot: true, // 开启热模块替换
  },
  // plugins: [
  //   new CopyWebpackPlugin({
  //     patterns: [
  //       { from: 'index.html', to: 'index.html' },
  //       { from: 'js', to: 'js' },
  //       { from: 'css', to: 'css' },
  //       { from: 'img', to: 'img' },
  //       { from: 'fonts', to: 'fonts' }
  //     ]
  //   })
  // ]
};

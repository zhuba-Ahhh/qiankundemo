module.exports = {
  webpack: (config) => {
    config.output.library = 'react-ts'
    config.output.libraryTarget = 'umd'
    config.output.publicPath = 'http://localhost:3001/'
    return config
  },
  devServer: (config) => {
    config.headers = {
      'Access-Control-Allow-Origin': '*'
    }
    return config
  }
}

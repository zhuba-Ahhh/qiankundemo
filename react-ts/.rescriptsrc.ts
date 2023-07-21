module.exports = {
  webpack: (config: {
    output: { library: string; libraryTarget: string; publicPath: string };
  }) => {
    config.output.library = "react-ts";
    config.output.libraryTarget = "umd";
    config.output.publicPath = "http://localhost:3001/";
    return config;
  },
  devServer: (config: {
    headers: { "Access-Control-Allow-Origin": string };
  }) => {
    config.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    return config;
  },
};

const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

const packageName = require("./package.json").name;

module.exports = defineConfig({
  // publicPath: "", // 保证子应用静态资源都是向7001端口发送的,此处的端口号和上文中注册的端口号保持一致
  devServer: {
    port: 4003, // 启动的端口号也保持一致
    headers: {
      "Access-Control-Allow-Origin": "*", // 因为乾坤会用fetch请求的方式在3000端口的base应用中访问7001的vue-ts，所以存在跨域，这里操作允许跨域
    },
  },
  configureWebpack: {
    output: {
      libraryTarget: "umd", // 打包格式
      library: `${packageName}-[name]`, // 打包成umd格式会挂载到window上，名为vue-ts
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  transpileDependencies: true,
});

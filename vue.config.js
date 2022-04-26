const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //开启代理服务器(方式一)
  // devServer: {
  //   proxy: "http://localhost:5000",
  // },
  //开启代理服务器(方式二)
  devServer: {
    proxy: {
      "/api": {
        target: "<url>",
        ws: true,
        changeOrigin: true,
      },
      "/foo": {
        target: "<other_url>",
      },
    },
  },
});

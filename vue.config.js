module.exports = {
  outputDir: 'dist', //build输出目录
  assetsDir: 'assets', //静态资源目录（js, css, img）
  lintOnSave: false, //是否开启eslint
  publicPath: "./",
  devServer: {
    open: true, //是否自动弹出浏览器页面
    // host: "localhost",
    port: '8080',
    https: false,
    hotOnly: false,
    // proxy: {
    //   '/api': {
    //     // target: "http://39.104.109.13/country", //API服务器的地址
    //     target: "http://39.104.109.13/livestock_visualization", //API服务器的地址
    //     changeOrigin: true, // 虚拟的站点需要更管origin
    //     // ws: true,  //代理websockets
    //     // pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
    //     //     '^/api': ''
    //     // }
    //   },
    // },
  }
}
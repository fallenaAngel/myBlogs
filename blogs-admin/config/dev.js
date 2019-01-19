'use strict'

const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const paths = require('../build/paths')

// 设置全局环境变量
process.env.NODE_ENV = 'development'
process.env.WEBPACK_SERVE = 'development'

// 使用Promise编写异步代码时，使用reject来处理错误。有时，开发者通常会忽略这一点，导致一些错误没有得到处理，监听unhandledrejection事件，即可捕获到未处理的Promise错误
process.on('unhandledRejection', err => {
  throw err
})

// 判断是否有index.html，src/index.js文件
if (!fs.existsSync(paths.appHtml) || !fs.existsSync(paths.appIndexJS)) {
  console.log('index.html或者src/index.js文件不存在，请检查文件路径')
  process.exit('index.html或者src/index.js文件不存在，请检查文件路径')
}

// 启动服务
const devConfig = require('../build/webpack.dev.config.js')
const compiler = webpack(devConfig)
const devServer = new WebpackDevServer(compiler, {
  // compress: true, //  启用生成文件的gzip压缩
  // clientLogLevel: 'none', // 关闭webpackDevServer自己的日志，因为它们通常是无用的。这个设置仍然会显示编译警告和错误
  contentBase: path.resolve(paths.appDirectory, 'dist'),
  // watchContentBase: true, // 默认情况下，contentbase不会触发页面重载
  hot: true, // css实现热更新，js会刷新页面
  // publicPath: '/', // 告诉WebpackDevServer使用相同的“根”路径
  // quiet: false // WebpackDevServer在默认情况下是有噪声的，所以我们可以静默
})
devServer.listen(8080, 'localhost', err => {
  if (err) {
    return console.log(err)
  }
  console.log('server is running http://localhost:8080')
})
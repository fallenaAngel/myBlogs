import { IConfig } from 'umi-types'
const path = require('path')
import ThemeConfig from './src/assets/theme-config.js'

// ref: https://umijs.org/config/
const config: IConfig =  {
  // 这里是umi基本配置
  //    配置插件列表
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true, // 默认实现antd、antd-mobile、antd-pro的按需编辑
      dva: true, // 为true，默认 immer、dynamicImport（按需加载）、hmr（热更新）全部开启
      // 实现路由级的动态加载（code splitting），可按需指定哪一级的按需加载
      dynamicImport: {
        webpackChunkName: true, // 是否通过 webpackChunkName 实现有意义的异步文件名
        loadingComponent: './components/pageLoading/index', // 指定加载过程中的loading的组件路径
        // level: '' // 指定按需加载的路由等级
      },
      dll: true, // 通过 webpack 的 dll 插件预打包一份 dll 文件来达到二次启动提速的目的
      locale: {
        enable: true,
        default: 'en-US', // zh-CN
        baseNavigator: true // default true, when it is true, will use navigator.language overwrite default
      }
    }],
  ],
  //    配置路由
  //      component 指向的路由组件文件是从 src/pages 目录开始解析的。用了配置路由，则约定式路由不生效
  routes: [
    {
      path: '/*',
      component: '../layouts/index',
      models: '../models/layouts/models.ts',
      exact: true,
      title: '首页',
      routes: [
        {
          path: '/',
          component: './home/index',
          title: 'home'
        }        
      ]
    }
  ],
  //    指定history类型，可选 browser、hash 和 memory
  history: 'hash',
  //    指定输出路径，默认./dist
  outputPath: './dist',
  //    是否开启hash文件后缀
  hash: false,
  //    配置浏览器最低版本，会自动引入 polyfill 和做语法转换，配置的 targets 会和合并到默认值，所以不需要重复配置
  targets: {
    ie: 11
  },
  //    配置全局的context，会覆盖到每个pages里面的context
  context: {},
  //    是否导出全部路由为静态文件，否则默认导出一个index.html文件
  exportStatic: false, // 值也可以是{}，如果值为对象，属性有：htmlSuffix启用.html后缀，.dynamicRoot部署到任意路径

  // 以下是webpack的配置项
  //    通过 webpack-chain(https://github.com/neutrinojs/webpack-chain) 的 API 扩展或修改 webpack 配置
  chainWebpack(config, { webpack }) {
    // 设置 alias
    // config.resolve.alias.set('@', './')
  },
  //    配置主题，实际上是配 less 变量。支持对象和字符串两种类型，字符串需要指向一个返回配置的文件
  theme: ThemeConfig,
  //    在 webpack 项目中，有一个入口文件，相当于一棵树的主干，入口文件有很多依赖的模块，相当于树枝。实际情况中，虽然依赖了某个模块，但其实只使用其中的某些功能。通过 tree-shaking，将没有使用的模块摇掉，这样来达到删除无用代码的目的
  treeShaking: true,
  //    防止捆绑某些外部依赖包
  externals: {
    // react: 'window.React'
  },
  alias: {
    '@': path.resolve(__dirname, './src')
  },
  devServer: {
    compress: true,
    port: 8000,
    open: 'Google Chrome'
  },
  //    禁用 CSS 的 SourceMap 生成
  disableCSSSourceMap: true,
  //    配置 webpack-dev-server 的 proxy 属性
  proxy: {}
}

export default config;

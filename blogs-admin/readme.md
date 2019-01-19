简单的webpack项目搭建配置
## package.json文件属性解析
* private: true，如果你设置了这个属性，那么npm将拒绝发布它
* eslintConfig: {} 在package.json文件里面以属性的方式配置eslint
  * 参数有：extends：'eslint'，继承第三方包的eslint规范
  * env：表示运行环境，有browser和node环境
* browserslist 目标浏览器配置表。为什么需要： 根据提供的目标浏览器的环境来，智能添加css前缀，js的polyfill垫片,来兼容旧版本浏览器，而不是一股脑的添加。避免不必要的兼容代码，以提高代码的编译质量
* babel ES6语法转换设置

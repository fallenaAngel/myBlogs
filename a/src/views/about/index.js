// 引入 router
import router from '../../router'

// 引入 html 模板，会被作为字符串引入
import template from '../../../index.html'

// 导出类
export default class {
  mount (container) {
    document.title = 'bar'
    container.innerHTML = template
    container.querySelector('#app').addEventListener('click', () => {
      // 调用 router.go 方法加载 /foo 页面
      router.go('/home')
    })
  }
}

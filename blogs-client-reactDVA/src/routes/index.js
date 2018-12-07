const routes = [
  {
    path: '/', // 首页
    exact: true,
    component: () => import('./home'),
    models: () => [import('../models/home')]
  }
]
export default routes

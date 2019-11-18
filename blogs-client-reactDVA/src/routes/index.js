const routes = [
  {
    path: '/', // 首页
    exact: true,
    component: () => import('./home'),
    models: () => [import('../models/home')]
  },
  {
    path: '/study', // 学习
    exact: true,
    component: () => import('./study'),
    models: () => [import('../models/study')]
  },
  {
    path: '/timerShaft', // 时间轴
    exact: true,
    component: () => import('./timerShaft'),
    models: () => [import('../models/timerShaft')]
  },
  {
    path: '/others', // 其他
    exact: true,
    component: () => import('./others'),
    models: () => [import('../models/others')]
  },
  {
    path: '/edit', // 新增/编辑
    exact: true,
    component: () => import('./edit'),
    models: () => [import('../models/edit')]
  }
]
export default routes

import { Router, Route, Switch } from 'dva/router'
import dynamic from 'dva/dynamic' // 路由和models懒加载，按需加载
import routes from './routes' // 路由的进一步抽离，抽离之后这个文件就不在需要更改了

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        {
          routes.map((item, key) => {
            return <Route key={key} path={item.path} exact={item.exact} component={dynamic({
              app,
              component: item.component,
              models: item.models
            })} />
          })
        }
      </Switch>
    </Router>
  )
}

export default RouterConfig

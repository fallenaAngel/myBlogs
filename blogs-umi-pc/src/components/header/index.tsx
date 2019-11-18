import * as React from 'react'
import { Link } from 'dva/router'
import { Layout, Dropdown, Input, Menu, Icon } from 'antd'
import style from './index.css'
const { Header } = Layout
const Search = Input.Search
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
  </Menu>
)

class HeaderCom extends React.Component {
  render() {
    return (
      <Header className={style.header}>
        <div className={style.headerCon}>
          <div className={style.headerTitle}><a href="/">我的个人博客</a></div>
          <div className={style.headerTags}>
            <div className={style.headerTag}>
              <Link to={{ pathname: '/' }}>首页</Link>
            </div>
            <Dropdown className={style.headerTag} trigger={['hover']} overlay={menu} placement="bottomCenter">
              <Link to={{ pathname: '/study' }}>学习<Icon type="caret-down" theme="filled" /></Link>
            </Dropdown>
            <div className={style.headerTag}>
              <Link to={{ pathname: '/timerShaft' }}>时间轴</Link>
            </div>
            <div className={style.headerTag}>
              <Link to={{ pathname: '/others' }}>其他</Link>
            </div>
            <div className={style.headerTag}>
              <Link to={{ pathname: '/edit' }}>添加</Link>
            </div>
          </div>
          <div className={style.headerSearch}>
            <Search
              placeholder="请输入搜索内容" />
            {/* onSearch={value => this.handleSearch(value)} */}
          </div>
        </div>
      </Header>
    )
  }
}
export default HeaderCom

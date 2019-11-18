import React from 'react'
import { Link } from 'dva/router'
import { Layout, Dropdown, Input, Menu, Icon } from 'antd'
import './index.scss'
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
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <Header className="header">
        <div className="headerCon">
          <div className="header-title"><a href="/">我的个人博客</a></div>
          <div className="header-tags">
            <div className="header-tag">
              <Link to={{ pathname: '/' }}>首页</Link>
            </div>
            <Dropdown className="header-tag" trigger={['hover']} overlay={menu} placement="bottomCenter">
              <Link to={{ pathname: '/study' }}>学习<Icon type="caret-down" theme="filled" /></Link>
            </Dropdown>
            <div className="header-tag">
              <Link to={{ pathname: '/timerShaft' }}>时间轴</Link>
            </div>
            <div className="header-tag">
              <Link to={{ pathname: '/others' }}>其他</Link>
            </div>
            <div className="header-tag">
              <Link to={{ pathname: '/edit' }}>添加</Link>
            </div>
          </div>
          <div className="header-search">
            <Search
              placeholder="请输入搜索内容"
              onSearch={value => this.handleSearch(value)} />
          </div>
        </div>
      </Header>
    )
  }
}
export default HeaderCom

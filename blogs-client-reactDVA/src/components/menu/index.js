import React from 'react'
import './menu.scss'
import { Menu, Icon, Button } from 'antd'
const SubMenu = Menu.SubMenu

class MenuCom extends React.Component {
  constructor (props) {
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
      <div style={{ width: 96 }} className="menuBox">
        <Button type="primary" onClick={this.toggleCollapsed}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="vertical"
          theme="light"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>首页</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>学习</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>其他</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="inbox" />
            <span>关于我</span>
          </Menu.Item>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
export default MenuCom

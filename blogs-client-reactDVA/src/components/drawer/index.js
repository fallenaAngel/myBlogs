import React from 'react'
import './Drawer.scss'
import { Drawer, Button } from 'antd'

class DrawerCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    })
  }
  onClose = () => {
    this.setState({
      visible: false,
    })
  }
  render() {
    return (
      <div className="DrawerComBox">
        <Button size="small" shape="circle" icon="menu-unfold" onClick={this.showDrawer}></Button>
        <Drawer
          title="博客指南"
          placement="left"
          width={250}
          height={250}
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >
        内容
        </Drawer>
      </div>
    )
  }
}
export default DrawerCom

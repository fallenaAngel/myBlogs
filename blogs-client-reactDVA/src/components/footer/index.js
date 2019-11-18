import React from 'react'
import { Link } from 'dva/router'
import { Layout } from 'antd'
import './index.scss'
const { Footer } = Layout

class FooterCom extends React.Component {
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
      <Footer className="footer">
        <div className="footer-content">
          <ul className="footer-nav">
            <li><Link to={{ pathname: '/' }}>首页</Link></li>
            <li><Link to={{ pathname: '/study' }}>学习</Link></li>
            <li><Link to={{ pathname: '/timerShaft' }}>时间轴</Link></li>
            <li><Link to={{ pathname: '/others' }}>其他</Link></li>
          </ul>
        </div>
      </Footer>
    )
  }
}
export default FooterCom

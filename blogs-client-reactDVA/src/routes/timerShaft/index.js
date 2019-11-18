import React from 'react'
import { connect } from 'dva'
import './index.scss'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Layout, BackTop, Spin } from 'antd'
const { Content } = Layout

class timerShaft extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 's'
    }
  }
  // 获取content内容区的dom结构，用来做antd的backTop，返回顶部
  handleBackTop() {
    return 'homeContent'
  }
  // 点击搜索
  handleSearch(value) {
    console.log(value)
  }
  render() {
    return (
      <Layout className="homeWrap">
        <div className="loading"><Spin size="large" /></div>
        <Content className="homeContent" ref={(e) => this.handleBackTop(e)}>
          <Header></Header>
          <div className="content">
            <Layout className="content">
              timerShaft
            </Layout>
            <BackTop target={() => this.refs['homeContent'] ? this.refs['homeContent'] : window} visibilityHeight="100" />
          </div>
          <Footer></Footer>
        </Content>
      </Layout>
    )
  }
}
const mapStatuToProps = state => {
  return {
    state
  }
}

export default connect(mapStatuToProps)(timerShaft)

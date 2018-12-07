import React from 'react'
import { connect } from 'dva'
import './index.scss'
import { Layout, Row, Col, BackTop, Input, Carousel, Dropdown, Menu, Icon, Spin } from 'antd'
const { Header, Content, Footer } = Layout
const Search = Input.Search
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
  </Menu>
)

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contentEl: window
    }
  }
  // 获取content内容区的dom结构，用来做antd的backTop，返回顶部
  handleBackTop () {
    return 'homeContent'
  }
  // 点击搜索
  handleSearch (value) {
    console.log(value)
  }
  render () {
    return (
      <Layout>
        <div className="loading"><Spin size="large" /></div>
        <Header className="header">
          <Row align="middle" justify="space-between" type="flex">
            <Col xs={4} sm={4} md={4} lg={4} xl={4} className="header-col1">我的个人博客</Col>
            <Col xs={20} sm={16} md={12} lg={8} xl={16} className="header-col2">
              <div className="header-tag">
                <a href="/">首页</a>
              </div>
              <div className="header-tag">
                <Dropdown overlay={menu} placement="bottomCenter" overlayClassName="dropDownStyle">
                  <a href="/study">学习<Icon type="caret-down" theme="filled" /></a>
                </Dropdown>
              </div>
              <div className="header-tag">
                <a href="/time">时间轴</a>
              </div>
              <div className="header-tag">
                <a href="/other">其他</a>
              </div>
              <div className="header-tag">
                <a href="about">关于我</a>
              </div>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={4} className="header-col3">
              <Search
                placeholder="请输入搜索内容"
                onSearch={value => this.handleSearch(value)}
                className="header-search"
              />
            </Col>
          </Row>
        </Header>
        <Content className="homeContent" ref={(e) => this.handleBackTop(e)}>
          <Carousel autoplay>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
          <BackTop target={() => this.refs['homeContent'] ? this.refs['homeContent'] : window} visibilityHeight="100"/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}

Home.propTypes = {
}

export default connect()(Home)

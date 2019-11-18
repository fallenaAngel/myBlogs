import React from 'react'
import { connect } from 'dva'
import { Layout, BackTop, Carousel, Spin, Card, List, Avatar } from 'antd'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './index.scss'
// import DrawerCom from '../../components/drawer'
const { Content, Sider } = Layout

// 热门标签所需数据
const listData = [
  {
    text: 'ajax'
  }
]
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contentEl: window
    }
  }
  async componentDidMount () {
    // 获取文章列表数据
    await this.props.dispatch({
      type: 'home/getArticleList'
    })
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
      <Layout className="homeWrap">
        <div className="loading"><Spin size="large" /></div>
        <Content className="homeContent" ref={(e) => this.handleBackTop(e)}>
          <Header></Header>
          <div className="content">
            <Carousel autoplay>
              {
                this.props.articleList.length ? this.props.articleList.map((item, index) => {
                  return <img src={item.imgUrl} key={index} alt="轮播图" />
                }) : ''
              }
            </Carousel>
            <Layout className="content">
              <Layout className="content-left">
                <Card title="最新文章" bordered={false}>
                  <List
                    itemLayout="horizontal"
                    dataSource={this.props.articleList}
                    renderItem={item => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={<Avatar src={item.imgUrl} />}
                          title={<a href="/">{item.title}</a>}
                          description={item.description}>
                          事件：1
                        </List.Item.Meta>
                      </List.Item>
                    )}
                  />
                </Card>
              </Layout>
              <Sider width={290} className="siderBox">
                <Card title="热门标签" bordered={false} className="hotTag">
                  {
                    listData.map((item, index) => {
                      return <span key={index}>{item.text}</span>
                    })
                  }
                </Card>
              </Sider>
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
    articleList: state.home.list
  }
}

export default connect(mapStatuToProps)(Home)

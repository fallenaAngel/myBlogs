import React from 'react'
import { connect } from 'dva'
import './index.scss'
import { Layout, BackTop, Input, Carousel, Dropdown, Menu, Icon, Spin, Card, List, Avatar } from 'antd'
// import MenuCom from '../../components/menu'
const { Header, Content, Footer, Sider } = Layout
const Search = Input.Search
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
  </Menu>
)
const listData = [
  {
    text: 'ajax'
  },
  {
    text: 'ajax'
  },
  {
    text: 'ajax'
  },
  {
    text: 'ajax'
  },
  {
    text: 'ajax'
  },
  {
    text: 'ajax'
  },
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
    await this.props.dispatch({
      type: 'home/getArticleList'
    })
    console.log(this.refs['homeContent'])
    // this.$refs['homeContent'].addEventListener('', )
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
        {/* <MenuCom/> */}
        <div className="loading"><Spin size="large" /></div>
        <Header className="header">
          <div className="headerCon">
            <div className="header-title">我的个人博客</div>
            <div className="header-tags">
              <div className="header-tag">
                <a href="/">首页</a>
              </div>
              <div className="header-tag">
                <Dropdown trigger={['hover']} overlay={menu} placement="bottomCenter">
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
            </div>
            <div className="header-search">
              <Search
                placeholder="请输入搜索内容"
                onSearch={value => this.handleSearch(value)} />
            </div>
          </div>
        </Header>
        <Content className="homeContent" ref={(e) => this.handleBackTop(e)}>
          <Carousel autoplay>
            {
              this.props.articleList.length ? this.props.articleList.map(item => {
                return <img src={item.imgUrl} key={item.id} alt="轮播图"/>
              }) : ''
            }
          </Carousel>
          <Layout className="content">
            <Layout className="content-left">
              <Card title="最新推荐" bordered={false}>
                <List
                  itemLayout="horizontal"
                  dataSource={this.props.articleList}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={item.imgUrl} />}
                        title={<a href="/">{item.title}</a>}
                        description={item.description}
                      />
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
              <Card title="推荐文章" bordered={false} className="recommend">
                <List
                  itemLayout="horizontal"
                  dataSource={this.props.articleList}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={item.imgUrl} />}
                        title={<a href="/">{item.title}</a>}
                        description={item.description}
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Sider>
          </Layout>
          <BackTop target={() => this.refs['homeContent'] ? this.refs['homeContent'] : window} visibilityHeight="100"/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
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

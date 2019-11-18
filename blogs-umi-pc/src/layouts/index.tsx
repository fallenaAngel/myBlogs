import * as React from 'react';
import styles from './index.css';
import { connect } from 'dva';
import { Layout, BackTop, Carousel, Card, List, Avatar } from 'antd';
import Header from '@/components/header/index';

const { Content, Sider } = Layout;
// 热门标签所需数据
const listData = [
  {
    text: 'ajax'
  }
];
// 类组件声明
interface IProps {
  children: any,
  computedMatch: any,
  dispatch: any,
  history: any,
  location: any,
  match: any,
  route: any,
  state: any,
  staticContext: any
}
interface IState {
  global: {
    text: string
  }
}
class BasicLayout extends React.Component<IProps, IState> {
  // public表示公有属性和方法
  public readonly state: Readonly<IState> = {
    global: this.props.state.global
  } as IState;
  componentDidMount () {
    console.log(this.props.dispatch)
    // 获取文章列表数据
    this.props.dispatch({
      type: 'layouts/getArticleList'
    })
  }
  // 获取content内容区的dom结构，用来做antd的backTop，返回顶部
  handleBackTop () {
    return 'homeContent'
  }
  // 点击搜索
  handleSearch (value:string) {
    console.log(value)
  }
  public render () {
    return (
      <Layout className={styles.homeWrap}>
        <Content className={styles.homeContent} ref={() => this.handleBackTop()}>
          <Header></Header>
          <div className={styles.content}>
            {/* <Carousel autoplay>
              {
                this.props.articleList.length ? this.props.articleList.map((item, index) => {
                  return <img src={item.imgUrl} key={index} alt="轮播图" />
                }) : ''
              }
            </Carousel> */}
            <Layout className={styles.content}>
              <Layout className={styles.contentLeft}>
                <Card title="最新文章" bordered={false}>
                  {/* <List
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
                  /> */}
                </Card>
              </Layout>
              <Sider width={290} className={styles.siderBox}>
                <Card title="热门标签" bordered={false} className={styles.hotTag}>
                  {
                    listData.map((item, index) => {
                      return <span key={index}>{item.text}</span>
                    })
                  }
                </Card>
              </Sider>
            </Layout>
            <BackTop target={() => this.refs['homeContent'] ? this.refs['homeContent'] : window} visibilityHeight={100} />
          </div>
          {/* <Footer></Footer> */}
        </Content>
      </Layout>
    )
  }
}
// const BasicLayout: React.FC = props => {
//   const { route, state } = props;
//   document.title = route.title;
//   return (
//     <div className={styles.normal}>
//       <h1 className={styles.title}>Yay! Welcome to umi! <span>{state.global.text}</span></h1>
//       {props.children}
//     </div>
//   );
// };
const mapStateToProps:any = (state:any) => {
  return {
    state
  }
}
export default connect(mapStateToProps)(BasicLayout);

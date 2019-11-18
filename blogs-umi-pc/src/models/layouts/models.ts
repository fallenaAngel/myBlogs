export default {
  namespace: 'layouts',
  state: {
    text: '1'
  },
  effects: {
    *getArticleList({ payLoad }: any, { call, put }: any) {
      console.log(payLoad)
      const result = yield setTimeout(() => {
        return '13'
      }, 1500)
      yield put({
        type: 'save',
        articleList: result
      })
    },
  },
  reducers: {
    save(state:any, action:any) {
      return {
        ...state,
        list: action.articleList
      }
    },
  }
}
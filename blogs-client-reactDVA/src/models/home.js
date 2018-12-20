import { GetArticleList } from '../services/home'
export default {
  namespace: 'home',
  state: {
    list: []
  },
  effects: {
    *getArticleList ({payLoad}, { call, put }) {
      const result = yield call(GetArticleList, {
        url: 'http://localhost:3002/api/getArticleList',
        method: 'GET',
        mode: 'cors'
      })
      console.log(result)
      yield put({
        type: 'save',
        articleList: result
      })
    },
  },
  reducers: {
    save (state, action) {
      return {
        ...state,
        list: action.articleList
      }
    },
  }
}

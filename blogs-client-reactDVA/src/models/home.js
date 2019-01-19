import { GetArticleList } from '../services/home'
export default {
  namespace: 'home',
  state: {
    list: []
  },
  effects: {
    *getArticleList ({payLoad}, { call, put }) {
      const result = yield call(GetArticleList, {
        url: '/api/getArticleList',
        method: 'GET',
        mode: 'cors'
      })
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

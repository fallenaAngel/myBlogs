import request from '../utils/request'
// 获取文章列表数据
export function GetArticleList(opts) {
  return request(opts, false)
}

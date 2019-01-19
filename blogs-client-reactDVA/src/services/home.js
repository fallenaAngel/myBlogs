import request from '../utils/request'
import HOST_URL from './index'

// 获取文章列表数据
export function GetArticleList(opts) {
  return request({ opts, url: `${HOST_URL}${opts.url}`}, false)
}

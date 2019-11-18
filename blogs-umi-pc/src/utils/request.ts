import fetch from 'dva/fetch'

function parseJSON(response:any) {
  return response.json()
}

function checkStatus(response:any) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

function json2url(obj:any) {
  const arr = []
  Object.keys(obj).forEach(key => {
    arr.push(`${key}=${obj[key]}`)
  })
  return arr.join('&')
}

// 重构options，默认method，加入headers
function setOpts(opts = {}, isNeedHeaders:any) {
  opts.url && delete opts.url
  !opts.method && (opts.method = 'GET')
  if (isNeedHeaders) {
    opts.body && (opts.body = json2url(opts.body))
    opts.method === 'POST' && (opts.headers = { 'Content-Type': 'application/x-www-form-urlencoded' })
  }
  return opts
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(options:any, isNeedHeaders = true) {
  return fetch(options.url, setOpts(options, isNeedHeaders))
    .then(checkStatus)
    .then(parseJSON)
    .then(data => (data))
    .catch(err => ({ err }))
}

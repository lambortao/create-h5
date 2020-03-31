import axios from 'axios'
import { layer } from '../layer';

/**
 * 后台接口函数
 * 
 * @param {string} url 接口的具体地址 - 必须
 * @param {obj} method 需要传到后台的文件 - 可选
 * @param {string} type 请求方式
 */
const __port = (url, param, method = 'post') => {
  let params = new URLSearchParams();
  Object.keys(param).forEach(key => {
    params.append(key, param[key])
  })
  
  url = url.indexOf('http://') > -1 ? url : `https://kitchens-crm.brandsh.cn/${url}`;

  return axios({
    url,
    method,
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data: params
  }).then(res => {
    if (res.status === 200) {
      if (parseInt(res.data.err_code) === 2000) {
        return res.data;
      } else {
        layer(res.data.msg);
        return res.data;
      }
    }
  })
}

export default __port
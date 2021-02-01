import Vue from 'vue';
import apiMap from './apis.js';
import JsonFormat from './jsonFormat.js';
import expendFormat from './expandFormat.js';
import realData from './realData.js';
Vue.prototype.httpMock = async function ({ cmd, type, input, success, error, complete, ...arg }) {
  let self = this;
  if (!apiMap[cmd]) {
    throw new Error('找不到 api：' + cmd + ', 请确认');
  }
  addLoading();
  let pageId = apiMap[cmd].pageId;
  // 有可能同一个接口有多个 pageId, 并且只有一个是真正可用的
  let result;
  if (typeof pageId === 'object') {
    let index = 0;
    let http;
    let data = {};
    do {
      http = await ajax(apiMap[cmd].pageId[index]);
      let has = hasData(http);
      if (has || index === apiMap[cmd].pageId.length - 1) {
        data = responseHandler(http, apiMap[cmd].pageId[index]);
      }
      index++;
    } while (!data.data && index < apiMap[cmd].pageId.length);
    result = data;
  } else {
    let http = await ajax(pageId);
    result = responseHandler(http, pageId);
  }
  reduceLoading();
  return result;
  async function ajax (pageId) {
    let _http;
    await new Promise(resolve => {
      const http = new XMLHttpRequest();
      http.onreadystatechange = function () {
        if (http.readyState === 4) {
          _http = http;
          resolve();
        }
      };
      http.open(arg.type || 'POST', arg.url || 'http://172.18.2.23:7001/server/index.php?s=/api/page/info', true);
      http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      http.send('page_id=' + pageId);
    });
    return _http;
  }
  function hasData (http) {
    if (http.status !== 200) { return false; }
    let res = JSON.parse(http.responseText);
    let data = JSON.parse(res.data.page_content).api_output;
    if (data.data) { return true; }
    return false;
  }
  function responseHandler (http, pageId) {
    let data;
    let res = JSON.parse(http.responseText);
    if (http.status === 200) {
      data = JSON.parse(res.data.page_content).api_output;
      if (realData[cmd]) {
        data = JSON.parse(JSON.stringify(realData[cmd]));
      } else {
        data = new JsonFormat(data, 'commentJson').exampleJson; // 解析出接口文档里的响应示例
        if (data.data) {
          data.data = expendFormat(data.data, input); // 使响应示例变成随机的、更丰富的模拟数据
        }
        if (!/^GET/.test(cmd) && data.hasOwnProperty('code')) {
          data.code = [200, 300, 404, 407, 500][parseInt(Math.random() * 4)];
          if (data.code === 200) {
            data.msg = '操作成功';
          } else if(data.code === 407){
            data.msg = '功能未开放';
          }else {
            data.msg = '发生了' + data.code + '错误';
          }
        } else {
          data.code = 200;
        }
      }
      console.group(apiMap[cmd].title, 'http://172.18.2.23:7001/web/#/11?page_id=' + pageId);
      if (/\{/.test(apiMap[cmd].uri) && !arg.id) {
        console.log('url：', apiMap[cmd].uri);
        console.error('缺少 id 字段');
      } else {
        console.log('url：', apiMap[cmd].uri.replace(/\{[^\}]+\}/, arg.id));
      }
      console.log('请求：', JSON.stringify(input, null, 2));
      console.log('响应：', data);
      console.groupEnd(apiMap[cmd].title, 'http://172.18.2.23:7001/web/#/11?page_id=' + pageId);
      // console.log(apiMap[cmd].uri, data)
      success && success.call(self, data);
    } else {
      error && error.call(self, res);
    }
    complete && complete.call(self, res);
    return data;
  }
};
let loadingNum = 0;
let loadingTimeout;
let loading;
let loadingTimes = 0;
function addLoading () {
  loadingNum++;
  if (loadingTimeout) { return; }
  loadingTimeout = setTimeout(() => {
    // loading了 n 次了, 友情提示一下
    // 第一次 loading 2次, 提示一下
    // 之后每 loading 5次, 提示一下
    loadingTimes++;
    if (loadingTimes === 2) {
      Vue.prototype.$message.warning('您的网络比较差, 操作响应时间会比较长, 请耐心等候');
      loadingTimes = -3;
    }
    loading = Vue.prototype.$loading({
      target: document.querySelector('.title-bar-text .icon'),
      spinner: 'el-icon-loading',
      background: '#f7f8f9',
    });
  }, 500);
}
function reduceLoading () {
  loadingNum--;
  if (loadingNum <= 0) {
    clearTimeout(loadingTimeout);
    loadingTimeout = loadingNum = 0;
    if (loading) {
      loading.close();
      loading = null;
    }
  }
}
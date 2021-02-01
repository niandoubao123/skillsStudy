import Vue from 'vue';
import apiMap from './apis.js';

let config = Vue.prototype.$config;
/**
 * 通用http请求封装（全部都是POST）
 * @param {string} cmd 请求的命令名称
 * @param {object} input 请求的表单
 * @param {function} [success] 请求成功回掉
 * @param {function} [error] 发生错误的回掉，这里发生错误包含业务层面的code !== '0' 情况，若传入，将不抛出错误
 * @param {function} [complete] 请求完成后的回掉
 * @param {object} [options] 请求行为的其他选项
 * @param [arg] 其他参数
 * @returns {Promise<string>}
 */
Vue.prototype.http = async function ({ cmd, input, success, error, complete, options, ...arg }) {
  let self = this;
  // if (!apiMap[cmd]) {
  //   throw new Error('找不到 api：' + cmd + ', 请确认');
  // }
  // addLoading()
  return await ajax();
  // let result = responseHandler(http)
  // reduceLoading()
  // return result

  async function ajax() {
    let url = config.host +cmd;
    if (!input) {
      input = {};
    }
    input = JSON.parse(JSON.stringify(input));
    // 处理一下表单,两侧空格去除
    for(const key in input){
      if(Object.hasOwnProperty.call(input, key)){
        // 只处理字符串类哦，其他别乱来
        if(typeof input[key] === 'string'){
          if(input[key]){
            // input[key] = input[key].replace(/\s+/g, ''); // 不能随便去除空格的，时间字符串中间就有空格，别乱来了
            input[key] = input[key].trim();
          }else{
            delete input[key];
          }
        }
      }
    }
    let result = '';
    await uni
      .request({
        url: url.replace(/\{.+\}/, arg.id),
        data: input,
        header: {
          sessionId: uni.getStorageSync('sessionId'),
          'Content-type': 'application/json'
        },
        method: 'POST'
      })
      .then(res => {
        // uni的请求如果失败，只会有res[0],不会有res[1]; res[0]是链路层的失败
        result = res[0] ? res[0] : res[1];
        let data;
        if (res[0] && res[0].errMsg) {
          // 这里是请求连接不成功的
          const errMsg = `网络错误:${res[0].errMsg}`;
          if(!options?.omitDefaultErrAction){
            uni.showToast({
              title: errMsg,
              icon: 'none',
              duration: 3000
            });
          }
          if (error) {
            // 这里错误返回的是uni请求的错误信息，不是后台的哦
            error.call(self, res[0]);
          } else {
            const err = new Error(errMsg);
            err.data = res[0];
            throw err;
          }
        }
        if (res[1].data) {
          data = res[1].data;
        }
        console.log('http请求',res)
        if (res[1] && res[1].errMsg === 'request:ok') {
          if (data.code == '200') {
            success && success.call(self, data);
          } else if (data.code === -1) {
            // 自定义后端请求出错逻辑
            let referrerInfoAppId = uni.getStorageSync('referrerInfoAppId');
            if (referrerInfoAppId) {
              uni.navigateBackMiniProgram({
                extraData: {
                  login: true
                }
              });
            }
            // 保存一下worker的选中服务区
            const ws = uni.getStorageSync('worker_sa_now');
            uni.clearStorageSync();
            uni.setStorageSync('worker_sa_now', ws);
            uni.reLaunch({
              url: '/pages-common/login/index'
            });
          } else {
            // 这里是后台返回的错误信息
            const errMsg = '操作出错:' + (res[1].data.message || res[1].data.msg || '未知错误');
            // 登陆无效不能忽略
            if(!options?.omitDefaultErrAction && !errMsg.includes('过期')){
              uni.showToast({
                title: errMsg,
                icon: 'none',
                duration: 2000,
                fail: console.log,
                success: console.log
              });
            }
            if (errMsg.includes('过期')) {
              setTimeout(() => {
                uni.reLaunch({
                  url: '/pages-common/login/index'
                });
              }, 1000);
            }
            if (error) {
              // 注意这里是后台连接成功，但返回错误，错误回掉是请求返回的数据
              error.call(self, data);
            } else {
              const err = new Error(errMsg);
              err.data = res[1].data;
              throw err;
            }
          }
        } else {
          const errMsg = '网络错误:请求失败';
          if(!options?.omitDefaultErrAction){
            // 这里是uni请求连接不成功的,这里似乎是冗余的,其实这里的错误也是res[0]
            uni.showToast({
              icon: 'none',
              duration: 3000
            });
          }
          if (error) {
            error.call(self, res[0]);
          } else {
            const err = new Error(errMsg);
            err.data = res[0];
            throw err;
          }
        }
      });
    return result;
  }
};

let loadingNum = 0;
let loadingTimeout;
let loading;
let loadingTimes = 0;
let loadingNow;

function addLoading() {
  loadingNum++;

  loadingNow = Vue.prototype.$loading({
    target: document.body,
    // spinner: 'el-icon-loading',
    // text: '正在获取数据',
    background: 'rgba(255, 255, 255, 0)'
  });

  if (loadingTimeout) {
    return;
  }

  loadingTimeout = setTimeout(() => {
    // loading了 n 次了, 友情提示一下
    // 第一次 loading 2次, 提示一下
    // 之后每 loading 5次, 提示一下
    loadingTimes++;
    if (loadingTimes === 2) {
      // Vue.prototype.$message.warning('您的网络比较差, 操作响应时间会比较长, 请耐心等候')
      loadingTimes = -3;
    }
    let target = document.querySelector('.title-bar-text .icon');
    if (target) {
      loading = Vue.prototype.$loading({
        target: target,
        spinner: 'el-icon-loading',
        background: '#f7f8f9'
      });
    } else {
      loading = Vue.prototype.$loading({
        target: document.body,
        spinner: 'el-icon-loading',
        text: '正在获取数据',
        background: 'rgba(0, 0, 0, 0.7)'
      });
    }
  }, 1000);
}

function reduceLoading() {
  if (loadingNow) {
    loadingNow.close();
    loadingNow = null;
  }

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

// 过滤空字符串为 undefined
function removeEmpty(obj) {
  if (obj instanceof Array) {
    obj.forEach(removeEmpty);
  } else {
    Object.keys(obj).forEach(key => {
      if (obj[key] === '') {
        obj[key] = undefined;
      }
    });
  }
}

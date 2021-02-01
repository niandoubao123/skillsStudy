import Vue from 'vue';
// let HOST = 'http://172.16.2.42:8097';  //基本接口地址
let HOST = 'https://ocser.platformcenter.net/client';  //基本接口地址
// let WS = 'ws://172.16.2.42:8097/client?userId=123';  //websocket地址
// let WS = 'ws://6z2z5j.natappfree.cc/client?userId=123';  //websocket地址
let WS = 'wss://wsocser.platformcenter.net/client/client';  //websocket地址
let FILESERVER = ''
Vue.prototype.$config = {
  version: '',
  host: HOST,
  ws:WS,
  fileServer:FILESERVER,
  // 开发模式配置
  dev: {
    // 进入的第一个页面
    firstPage: ''
  }
};


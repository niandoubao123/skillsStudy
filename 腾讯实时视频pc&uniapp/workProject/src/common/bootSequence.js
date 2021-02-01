// 本模块用于系统基础信息初始化功能
import Vue from 'vue';

/**
 * 统一的系统启动逻辑处理
 *
 * @returns {Promise<void>}
 */
Vue.prototype.$systemBootstrap = async ()=>{
  // todo: 比如微信授权、登录判断等
  const isLogin =  uni.getStorageSync('isLogin');
  if(!isLogin){
    uni.reLaunch({
      url:'/pages/videoPhone/index'
      // url:'/pages/callOver/index'
    })
  }
}

/**
 * 统一的系统初始化处理逻辑，将完成系统数据初始化（账户权限，字典），并根据用户跳转功能页
 * @returns {Promise<void>}
 */
Vue.prototype.$systemInit= async () => {
  // todo: 比如获取权限字典等
  // 菜单处理
  let menu = [
    {
      title: '我的',
      index:1,
      sort: 2,
      icon:'mine',
      url: '/pages/videoPhone/index',
      authId: 'xxxxxxxxxx',
      displayName: '我的',
    },
    {
      title: '主页',
      index:0,
      sort: 1,
      icon:'index',
      url: '/pages/callOver/index',
      authId: 'xxxxxxxxxx',
      displayName: '主页',
    }
  ];

  // 开发测试环境下增加"测试菜单"
  if (process.env.NODE_ENV === 'development') {
    // todo: 开发模式下的额外菜单
  }
  /**
   * 用户的菜单
   * @type {Array<menuObj>}
   */
  Vue.prototype.$userMenus = menu;
  uni.setStorageSync('userMenus', menu);
  // 开始跳转页面
  // 开发模式配置的跳转页面
  if (process.env.NODE_ENV === 'development' && Vue.prototype.$config.dev?.fistPage) {
    const config = Vue.prototype.$config.dev;
    console.log('开发模式dev配置:', config);
    console.log('尝试跳转页面:', config.firstPage);
    // 开发模式，走config.js中的dev配置
    uni.switchTab({
      url: config.firstPage,
      fail: e => {
        console.log('dev设置跳转的是非tab页,直接跳转页面');
        uni.reLaunch({
          url: config.firstPage,
          fail: e => {
            console.log('开发模式跳转失败：', e);
          }
        });
      }
    });
  } else {
    // 正常的跳转逻辑,可自定义
    uni.switchTab({
      url: menu[0].url,
      fail: console.error
    });
  }
}

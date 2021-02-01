<script>
import Vue from 'vue';
export default {
  onLaunch: function (data) {
    console.log('App Launch');
    uni.hideTabBar()
  },
  onShow: function (data) {
    if (data.referrerInfo && data.referrerInfo.appId) {
      uni.clearStorageSync();
      uni.setStorageSync('referrerInfoAppId', data.referrerInfo.appId);
      Vue.prototype.$store.commit('changeParkingId', data.referrerInfo.extraData.parkingId);
      Vue.prototype.$store.commit('changeParkingName', data.referrerInfo.extraData.parkingName);
      Object.keys(data.referrerInfo.extraData).forEach(key => {
        uni.setStorageSync(key, data.referrerInfo.extraData[key]);
      });
      console.log('uni.getStorageInfoSync:--------------');
      console.log(uni.getStorageInfoSync());
    }
    console.log('App Show');
  },
  onHide: function () {
    console.log('App Hide');
  },
  onLoad() {
    uni.hideTabBar()
  } 
};
</script>

<style lang="scss">

@import "uview-ui/index.scss";
// // 全局样式
// @font-face {
//   font-family: 'iconfont';  /* project id 2095342 */
//   src: url('//at.alicdn.com/t/font_2095342_wy7j2tw9pbh.eot');
//   src: url('//at.alicdn.com/t/font_2095342_wy7j2tw9pbh.eot?#iefix') format('embedded-opentype'),
//   url('//at.alicdn.com/t/font_2095342_wy7j2tw9pbh.woff2') format('woff2'),
//   url('//at.alicdn.com/t/font_2095342_wy7j2tw9pbh.woff') format('woff'),
//   url('//at.alicdn.com/t/font_2095342_wy7j2tw9pbh.ttf') format('truetype'),
//   url('//at.alicdn.com/t/font_2095342_wy7j2tw9pbh.svg#iconfont') format('svg');
// }
@font-face {
  font-family: "iconfont";
  src: url('./libs/iconfont/iconfont.eot') format('embedded-opentype'), /* IE6-IE8 */
  url('./libs/iconfont/iconfont.woff') format('woff'), /* chrome, firefox */
  url('./libs/iconfont/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./libs/iconfont/iconfont.svg') format('svg'); /* iOS 4.1- */
}

.icon {
  // background-image:url('./assets/imgs/sprites.png');
  font-family: iconfont;
  font-size: 32rpx;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */

//@font-face {
//  font-family: uniicons;
//  src: url('/static/uni.ttf');
//}
/* #endif */
body {
  //background: #F3F7FA;
}

// .uni-page-wrapper{
// 	height:auto !important;
// }
</style>

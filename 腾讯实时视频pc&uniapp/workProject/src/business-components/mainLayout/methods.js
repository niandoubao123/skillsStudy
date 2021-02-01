export default class {
  // 检查是否是iphonex以上，底部有横横
  checkIphoneX() {
    let _self = this;
    uni.getSystemInfo({
      success: function (res) {
        // console.log('机型信息:', res);
        if (res.model.search('iPhone X') !== -1 || res.model.search('iPhone 11') !== -1) {
          _self.isIphoneAdaptation = true;
        }
      }
    });
  }
}

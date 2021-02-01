export let life = {
  onLoad(options) {
    let obj = JSON.parse(JSON.stringify(options))
    uni.setStorageSync('parkingId', obj.parkingId);
    uni.setStorageSync('parkingName', obj.parkingName);
    uni.setStorageSync('channelId', obj.channelId);
    uni.setStorageSync('serviceTel', obj.serviceTel);
  },
  onShow: function () {
    uni.hideHomeButton()
  },
  onReady() {},
  async created() {},
  async mounted() {
    console.log('进入layout页面(mounted)');
    uni.hideNavigationBarLoading();
    uni.showLoading({
      title: '加载中'
    });
    console.log('当前sessionId:', uni.getStorageSync('sessionId'));
    try {
      // **************** 运行启动逻辑 *************
      await this.$systemBootstrap();
      // **************** 运行系统启动初始化 ************
      await this.$systemInit();
    } catch (e) {
      // 出错跳转登录页
      uni.reLaunch({
        url:'/pages/videoPhone/index'
      })
    }
  }
};
export let event = {};
export let watch = {};

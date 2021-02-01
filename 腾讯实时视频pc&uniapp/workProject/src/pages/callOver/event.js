export let life = {
  async created() {
    //预留发websocket的位置  一进页面就发事件  然后等待接收事件
  },
  async mounted() {
  }
};
export let event = {
  toBack(){
    uni.switchTab({
      url: '/pages/videoPhone/index',
      fail: e=>{
        uni.navigateTo({
          url:'/pages/videoPhone/index'
        })
      }
    })
  },
  binderror (e) {
    console.log("组件加载失败", e)
    uni.showToast({
      title: "组件加载失败"+e.detail.errMsg+ e.detail.scene,
      icon: "none",
      duration: 2500
    })
  },
  bindload(){
    uni.showToast({
      title: "组件加载成功呢的",
      icon: "none",
      duration: 2500
    })
  },
};
export let watch = {};

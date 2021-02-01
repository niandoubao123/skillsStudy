export const props = [
  'activeTab', // 当前激活的tab页面，如果传入，表示页面为tab页，将显示底部tab导航
];
export const model = {
  isIphoneAdaptation: false
};
export const computed = {
  menuList(){
    return this.$userMenus;
  },
  // 主高度
  mainHeight(){
    let mine = 0;
    if(this.activeTab){
      // 有tabbar
      mine += 98;
    }
    if(this.isIphoneAdaptation){
      mine += 68;
    }
    return `calc(100vh - ${mine}rpx)`;
  }
};

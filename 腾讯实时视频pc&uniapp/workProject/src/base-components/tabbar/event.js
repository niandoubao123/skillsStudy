export let life = {
  created() {
    this.methods('checkIphoneX');
    this.methods('loadMenus');
  },
  mounted() {
  }
};
export let event = {
  // 用户点击菜单
  clickMenu(menu) {
    uni.switchTab({
      url: menu.url,
      fail: console.error
    });
  }
};
export let watch = {
  // // 根据activeTab动态变化menu属性
  // activeTab(v) {
  //   console.debug('菜单激活变化：', v);
  //   this.menus = this.menus.map(i => {
  //     if (i.url === v) {
  //       i.isActive = true;
  //     }
  //   });
  // }
};

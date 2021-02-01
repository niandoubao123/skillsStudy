export default class {
  checkIphoneX() {
    let _self = this;
    uni.getSystemInfo({
      success: function (res) {
        if (res.model.search('iPhone X') !== -1 || res.model.search('iPhone 11') !== -1) {
          _self.isIphoneAdaptation = true;
        }
      }
    });
  }

  /**
   * 加载菜单,这里从外部传入，解偶一下
   */
  loadMenus() {
    this.menus = this.menuList;
  }

  toPage(name) {
    uni.switchTab({
      url: name,
      fail: e => {
        console.log(e);
        // 这里做一下这种操作，可能也用不到，大家还是把tab页面都放在主包中吧
        uni.navigateTo({
          url: name
        });
      }
    });
  }
}

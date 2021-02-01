const activeColor = '#39C399';
const deActiveColor = '#333333';
const imgPathPrefix = '/static/img/tabbar/';
export let props = [
  'activeTab', // 当前激活的菜单的url
  'menuList', // 传入menu菜单列表
  'isIphoneAdaptation', // 是不是需要处理iphone全面屏的底部杠杠
  'height', // 整体tabbar高度, 默认96rpx
  'safeArea', // 底部安全距离，默认68rpx
];
export let model = {
  // 用户拥有的菜单
  menus: []
};
export let computed = {
  // 整个tabbar的高度
  _height() {
    const h = this.height ? parent(this.height) : 96;
    if (this.isIphoneAdaptation) {
      return h + 68 + 'rpx';
    } else {
      return h + 'rpx';
    }
  },
  // 底部pixed是否抬起
  _bottom() {
    const s = this.safeArea ? parent(this.safeArea) : 68;
    if (this.isIphoneAdaptation) {
      return s + 'rpx';
    } else {
      return 0;
    }
  },
  // 菜单列表样式控制, 根据当前激活的菜单计算列表属性
  menusData() {
    return this.menus.map(i => {
      let icon = i.icon || 'default';
      i.isActive = i.url.includes(this.activeTab);
      if (i.isActive) {
        i.iconPath = `${imgPathPrefix + icon}-active.png`;
        i.color = activeColor;
      } else {
        i.iconPath = `${imgPathPrefix + icon}.png`;
        i.color = deActiveColor;
      }
      return i;
    });
  }
};

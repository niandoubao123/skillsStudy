<template>
  <!--  由于cover-view是fixed(conver-view如果不fixed在iPhone上会滚动，bug)，使用一个div来占空间（方便柔性布局），所以高度是需要固定的-->
  <div :style="{height:_height}">
    <!--    距离底部的空间，由于需要适配全面屏手机，需要设置抬起-->
    <div class="tabbar-cover-view" :style="{paddingBottom:_bottom}">
      <div
        class="tabbar-cover-view-item" v-for="(menu,index) of menusData" :key="index" @click="clickMenu(menu)">
        <div class="item-image">
          <img class="image icon iconfont" :src="menu.iconPath"></img>
        </div>
        <div class="item-title" :style="{color:menu.color}">{{menu.title}}</div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.tabbar-cover-view {
  // height 和 bottom 由model控制
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background: #fff;
  z-index:9999;
  .tabbar-cover-view-item {
    text-align: center;
    height: 100%;
    width: 100%;
    .item-image {
      width: 100%;
      height: 48rpx;
      display: flex;
      padding-top: 8rpx;
      justify-content: center;
      box-sizing: border-box;
      .image {
        width: 40rpx;
        height: 40rpx;
      }
    }
    .item-title {
      width: 100%;
      height: 40rpx;
      line-height: 40rpx;
    }
  }
}
</style>

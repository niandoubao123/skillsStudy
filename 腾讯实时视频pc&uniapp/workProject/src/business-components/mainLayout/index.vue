<template>
  <div class="main">
    <!--    顶部固定-->
    <div v-if="$slots.topFixed" class="topFixed" >
      <slot name="topFixed"></slot>
    </div>
    <!--    中部默认内容-->
    <div class="defaultContent">
      <slot ></slot>
    </div>
    <!--    底部固定, 如果没有tabbar，且为全面屏适配，padding底部安全距离-->
    <div
      v-if="$slots.bottomFixed" class="bottomFixed"
      :style="{paddingBottom:(isIphoneAdaptation&&!activeTab)?'68rpx':0}">
      <slot name="bottomFixed"></slot>
    </div>
    <!--    底部tabbar -->
    <div v-if="activeTab" class="tabbar">
      <!-- <base-tabbar :activeTab="activeTab" :menuList="menuList" :isIphoneAdaptation="isIphoneAdaptation"></base-tabbar> -->
    </div>
  </div>
</template>
<style scoped lang="scss">
.main {
  height: 100vh;
  width: 100%;
  display: flex;
  position: fixed;
  top:0;
  flex-direction: column;
  background: transparent;
  // 顶部固定
  .topFixed {
    background: transparent;
    width: 100%;
  }
  // 中部默认内容
  .defaultContent {
    background: transparent;
    width: 100%;
    flex: 1;
    overflow: scroll;
    min-height: 0;
    min-width: 0;
  }
  // 底部固定
  .bottomFixed {
    background: transparent;
    width: 100%;
  }
  // tabbar导航
  .tabbar {
    z-index:9999;
    width: 100%;
  }
}
</style>


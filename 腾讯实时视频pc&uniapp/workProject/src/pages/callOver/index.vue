<template>
  <div class="over-wrap">
    <div class="over-img">
      <img src="/static/img/over.png" alt="">
      <p>感谢致电</p>
    </div>
    <div class="btn-box">
      <div class="back-btn"><navigator open-type="exit" target="miniProgram">返回</navigator></div>
      <!-- <div class="back-btn" @click="toBack">返回</div> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
// 主背景
.over-wrap{
  height: 100vh;
  background: #fff;
  position: relative;
  overflow: hidden;
  .over-img{
    width: 300rpx;
    height: 300rpx;
    margin:200rpx auto;
    border:2rpx solid rgb(217,168,94);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    p{
      position: absolute;
      bottom: -100rpx;
      color: rgb(200,155,87);
      font-size: 40rpx;
    }
    img{
      width:250rpx;
      height:200rpx;
      margin-bottom: 20rpx;
    }
  }
  .btn-box{
    position: absolute;
    bottom: 50rpx;
    left: 0;
    width: 100%;
    height:200rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    >div{
      width: 90%;
      height: 60rpx;
      line-height: 60rpx;
      border:2rpx solid rgb(217,168,94);
      border-radius: 20rpx;
      text-align: center;
      color: rgb(217,168,94);
    }
  }
}
</style>

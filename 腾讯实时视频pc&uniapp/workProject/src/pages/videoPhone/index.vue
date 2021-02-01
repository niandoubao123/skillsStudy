<template>
  <div class="main-warp" @click="hiddenPhoneDialog">
    <!-- 接通中 -->
    <div class="connect" v-if="status==='connnecting'">
      <div class="logo">
        P
      </div>
      <div class="tips">
        <div class="parking-name">{{parkingName?parkingName:'无车场名称'}}</div>
        <div class="tips-words">正在为您联系客服，请稍后···</div>
      </div>
    </div>
    <!-- 更多 -->
    <cover-view class="more" v-if="status!='connnecting'" @click.stop="showNumber">
      <cover-image src="/static/img/更多.png"></cover-image>
    </cover-view>
    <!-- 电话弹窗 -->
    <cover-view class="phone-dialog" v-if="phoneDialog">
      <cover-view class="top-label">物业电话</cover-view> 
      <cover-view class="bot-number" @click.stop="toCall">{{servicePhone?servicePhone:''}} <cover-view class="phone-icon"><cover-image src="/static/img/电话1.png" alt=""></cover-image></cover-view> </cover-view> 
    </cover-view>
    <!-- 视频区域 -->
    <div class="video-content">
      <!-- 头像信息 -->
      <div class="person-info">
        <!-- 客服图片 -->
        <div class="calling-pic" v-if="status!='connnecting'">
          <div class="pic-wrap"> 
            <img :src="servicePeople" alt="">
          </div>
          <div class="calling-name">
           {{custServiceName}}
          </div>
          <div class="parking-name">
            {{parkingName?parkingName:'无车场名称'}}
          </div>
        </div>
        <div class="calling-video">
          <external-trtc-room id="trtcComponent" :config.sync="playVidoe.input.rtcConfig" ref="trtcComponent"> </external-trtc-room>
        </div>
      </div>
      <!-- 通话功能 -->
      <cover-view class="calling-tool" v-if="status==='connnecting'">
        <cover-view class="calling-done">
          <cover-view class="done-wrap" v-if="status!='connnecting'" @click="toggleSoundModeFun">
            <!-- <cover-view class="dones audio-calling" >
              <cover-image :src="audioImg" alt=""></cover-image>
            </cover-view>
            <cover-view class="done-words">转到摄像头</cover-view> -->
          </cover-view>
          <cover-view class="done-wrap" @click="hangUpFun">
            <cover-view class="dones exit-calling">
              <cover-image :src="overImg" alt=""></cover-image>
            </cover-view>
            <cover-view class="done-words">挂断</cover-view>
          </cover-view>
          <cover-view class="done-wrap" v-if="status!='connnecting'" @click="switchCamera">
            <!-- <cover-view class="dones turn-camera">
              <cover-image :src="turnCamera" alt=""></cover-image>
            </cover-view>
            <cover-view class="done-words" style="color:gray;">翻转镜头</cover-view> -->
          </cover-view>
        </cover-view>
      </cover-view>
    </div>


    <!-- 手写一个confirm   -->
    <div class="confirm-wrap" v-if="callConfirmDialog">
      <div class="confirm">
        <div class="confirm-title">即将拨打</div>
        <div class="confirm-content">
          金禾宫停车场的物业电话，将中断与客服通话
          是否继续？
        </div>
        <div class="confirm-btn">
          <button @click="cannelCall">取消</button>
          <button @click="submitCall">拨打</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// 主背景
.main-warp {
  height: 100vh;
  background: rgba(0,0,0,1);
  position: relative;
  overflow: hidden;
  .calling-video{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
  }
  //右上角更多
  .more{
    position: absolute;
    right: 15rpx;
    top: 20rpx;
    width: 60rpx;
    height: 25rpx;
    border:1rpx solid #fff;
    border-radius: 13rpx;
    color: #fff;
    text-align: center;
    line-height: 25rpx;
    font-weight: bold;
    font-size: 40rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    cover-image{
      width: 37rpx;
      height: 10rpx;
    }
  }
  .phone-dialog{
    display: flex;
    flex-direction: column;
    padding:30rpx 40rpx;
    border-radius: 10rpx;
    position: absolute;
    right: 15rpx;
    top: 50rpx;
    background: rgb(117,117,117);
    .top-label{
      color: #fff;
      font-size: 30rpx;
      text-align: center;
      margin-bottom: 20rpx;
    }
    .bot-number{
      color: rgb(31,244,78);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30rpx;
      .phone-icon{
        display: block;
        position: relative;
        width: 40rpx;
        height: 40rpx;
        border-radius: 50%;
        background: #fff;
        margin-left: 10rpx;
      }
      cover-image{
        position: absolute;
        top: 0;
        left: 0;
        width: 40rpx;
        height: 40rpx;
      }
    }
  }
  //视频区域
  .video-content{
    width: 100%;
    height: 100%;
    display: flex;
    background: rgba(0,0,0,1);
    flex-direction: column;
    .person-info{
      width: 100%;
      height: 70%;
      display: flex;
      flex-direction: column;
      .calling-pic{
        width: 100%;
        height: 550rpx;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .pic-wrap{
          width: 250rpx;
          height: 250rpx;
          background: rgb(215,215,215);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            width: 180rpx;
            height: 180rpx;
          }
        }
        .calling-name{
          height: 80rpx;
          line-height: 80rpx;
          color: #fff;
          font-size: 40rpx;
          margin-top: 40rpx;
        }
        .parking-name{
          font-size: 30rpx;
          color: gray;
        }
      }
    }
    .calling-tool{
      width: 100%;
      height: 30%;
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 999;
      .calling-time{
        width: 100%;
        color: gray;
        text-align: center;
        height: 40rpx;
      }
      .calling-done{
        width: 100%;
        flex:1;
        display: flex;
        justify-content: space-evenly;
        padding-top: 50rpx;
        .done-wrap{
          display: flex;
          flex-direction: column;
          align-items: center;
          .done-words{
            color: #fff;
            margin-top: 30rpx;
          }
        }
        .dones{
          width: 110rpx;
          height: 110rpx;
          border-radius: 50%;
          border:1rpx solid #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          cover-image{
            width: 110rpx;
            height: 110rpx;
          }
        }
        .exit-calling{
          border:none;
        }
        .audio-calling{
          cover-image{
            width: 50rpx;
            height: 50rpx;
          }
        }
        .turn-camera{
          border:1rpx solid gray;
          cover-image{
            width: 50rpx;
            height: 50rpx;
            opacity: 0.8;
          }
        }
      }
    }
  }
  .confirm-wrap{
    width: 100%;
    height: 550rpx;
    border-radius: 10rpx;
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 9999;
    padding:20rpx 40rpx 40rpx 40rpx;
    .confirm{
      position: relative;
      width: 100%;
      height: 100%;
    }
    .confirm-title{
      font-size: 40rpx;
      height: 80rpx;
      line-height: 80rpx;
      border-bottom:1.5px solid rgba(0,0,0,0.25);
    }
    .confirm-content{
      font-size: 34rpx;
      padding:20rpx 0;
    }
    .confirm-btn{
      width: 100%;
      position: absolute;
      bottom: 10rpx;
      left: 0;
      display: flex;
      justify-content: space-between;
      button{
        width: 500rpx;
        height: 80rpx;
        border:1rpx solid rgb(174,139,21);
        border-radius: 0;
        text-align: center;
        line-height: 80rpx;
        color: rgb(174,139,21);
        &:first-child{
          border-right-color:transparent;
        }
      }
    }
  }
  .connect{
    position: absolute;
    width: 100%;
    height: 200rpx;
    display: flex;
    padding:0 60rpx;
    align-items: center;
    .logo{
      width: 100rpx;
      height: 100rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 60rpx;
      color: #fff;
      background:rgb(220,198,132);
      position: relative;
    }
    .logo::after{
      content:"";
      display: block;
      width: 5rpx;
      height: 100rpx;
      background: #fff;
      position: absolute;
      right: 0;
      top: 0;
    }
    .tips{
      color: #fff;
      padding:0 10rpx;
      .parking-name{
        height: 60rpx;
        font-size: 35rpx;
        display: flex;
        align-items: center;
      }
      .tips-words{
        display: flex;
        align-items: center;
        height: 40rpx;
        font-size: 20rpx;
        color:rgba(255,255,255,0.8);
      }
    }
  }
}
</style>

import overImg from '@/static/img/挂断.png'
import turnCamera from '@/static/img/翻转镜头.png'
import audioImg from '@/static/img/电话.png'
import videoImg from '@/static/img/摄像头.png'
import servicePeople from '@/static/img/电话客服.png'
export let model = {
  overImg,
  turnCamera,
  audioImg,
  videoImg,
  servicePeople,
  curRoomId:888888,  //房间号
  custServiceName:undefined,   //客服名称
  is_open_socket: false,// websocket打开状态
  code:'',//当前code
  openId:'',
  options:{},
  callVideo:{
    input:{
      template: '1v1',
      debugMode: false,
      cloudenv: 'PRO',
      callingMode:'video',  //通话模式  语音/视频  audio/video
      cameraMode:'back',  //通话模式  前/后  front、after
    }
  },
  playVidoe:{
    input:{
      rtcConfig: {
        sdkAppID: 1400455126, // 必要参数 开通实时音视频服务创建应用后分配的 sdkAppID
        userID: 'test001', // 必要参数 用户 ID 可以由您的帐号系统指定
        userSig: '"eJwtzMEKwjAQRdF-mbXUmZLEWnChLnQhWtAqXSpJZahKbGKViv9uaLt858H9wmGzjxpTQwpxhDDqNmvz8Fxyx944j0jD5XR1tpY1pCQQhZQUq-7xfDdBFVEggdSr*ViugysUCeLQ4Gvo2sKf2FXila3KZbEbv*dTe1lkyjVtK-T6ts3ziXziMZHFDH5-ENoxTQ__"', // 必要参数 身份签名，相当于登录密码的作用
        template: '1v1', // 必要参数 组件模版，支持的值 1v1 grid custom ，注意：不支持动态修改, iOS 不支持 pusher 动态渲染
      },
    }
  },
  loginName: '',
  password: '',
  code:'',
  phone:'13555555555',
  phoneDialog:false,
  callConfirmDialog:false,
  status:'connnecting' , //连接状态 connnecting 连接中  success连接成功
};
export let computed = {
  parkingName(){
		return  uni.getStorageSync('parkingName');
  },
  parkingId(){
    return  uni.getStorageSync('parkingId');
  },
  channelId(){
    return  uni.getStorageSync('channelId');
  },
  serviceName(){
    return  uni.getStorageSync('serviceName');
  },
  servicePhone(){
    return  uni.getStorageSync('serviceTel');
  },
};

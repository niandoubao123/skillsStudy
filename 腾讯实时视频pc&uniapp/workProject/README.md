# signalway-uniapp-boilerplate
信路威uniapp项目样板

## 目录结构

```text
├── mobileframework        // 信路威前端开发框架uniapp版本
├── doc                    // 说明和规范文档
├── package.json
├── README.md
└── src
   ├── App.vue
   ├── appBoot            // 程序进入的第一个引导页面
   |  ├── event.js
   |  ├── index.vue
   |  ├── methods.js
   |  └── model.js
   ├── base-components    // 基础组件
   |  └── tabbar
   ├── business-components  // 业务组件
   |  └── mainLayout
   ├── common
   |  ├── bootSequence.js   // 系统启动和初始化相关逻辑
   |  ├── index.js
   |  └── utils
   ├── external-components
   ├── interceptor          // 接口请求处理器
   |  ├── http
   |  ├── index.js
   |  └── mockApi
   ├── libs                 // 依赖
   |  ├── iconfont
   |  ├── md5.js
   |  ├── README.md
   |  └── u-charts
   ├── main.js
   ├── manifest.json        // 程序属性文件
   ├── pages                // 程序逻辑页面
   |  ├── common            // common分包
   |  └── main              // 主包
   ├── pages.json
   ├── static               // 静态资源
   |  ├── config.js         // 配置文件
   |  └── img               // 图片资源
   ├── store                // vuex相关
   |  ├── $u.mixin.js
   |  ├── device.js
   |  └── index.js
   └── uni.scss             // 全局样式
```

## 运行原理

##### 1. 编译和运行

项目实际运行由`mobileframework`框架使用uniapp的`vue-cli-service`编译为dist下的程序文件，如微信小程序，实际加载的为dist编译后的目标文件。在框架启动前，会将实际项目的`src`目录进行初始化，并监听变化，根据框架规则，编译为标准vue文件，`vue-cli-service`监听到框架内的文件变化后进行dist文件输出，小程序开发工具更新，得到结果。

##### 2. src目录逻辑

* 程序启动后，固定访问`/appBoot/index`页面，在这个页面的`event`中将统一处理系统初始化、权限、跳转等逻辑，遵循一定的规范，便于维护和阅读。

* 具体的业务页面全部位于`/pages`目录下，其中`main`目录是固定为程序主包，其他目录为分包处理。

* 程序启动后可在`/appBoot`中处理自定义的跳转逻辑，如在配置文件中定义开发模式的跳转:

  ```js
  // src/static/config.js
  Vue.prototype.$config = {
    version: 'xxxxxxx',
    host: 'xxxxxx',
    fileServer:'xxxxxx',
    // 开发模式配置
    dev: {
      // 进入的第一个页面
      firstPage: ''
    }
  };
  
  // 并在src/common/bootSequence.js中读取配置进行跳转
  ```

##### 3. tabbbar和页面布局

* 内置了一个统一的`base-tabbar`组件，可根据需要进行修改，但主要逻辑需固定，将于`appBoot`中的跳转相关。
* 内置一个基础的程序布局组件`business-mainLayout`，布局组件中包含`base-tabbar`并且可通过参数自动显示适配tabbar逻辑。

## Todo

- [ ] mobileframework框架内嵌入pages.json的自动管理

- [ ] 快速创建新项目的脚手架工具
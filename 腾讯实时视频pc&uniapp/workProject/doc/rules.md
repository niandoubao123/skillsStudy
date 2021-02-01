## 开发基本规范

### 1. 主包和分包

* 主包内容必须在`/pages/main/`下
* 其他分包必须在`/pages/xxxx`下，命名时应于对应逻辑相符

### 2. 程序初始化

* 程序初始化逻辑应写在`/common/bottSequence.js`中，参考样板中的内容

* 菜单应在`Vue.prototype.$systemInit()`方法中加载，并保存在`Vue.prototype.$userMenus`中。菜单的格式如下：

  ```js
   {
        title: '主页',
        index:0,
        sort: 1,
        icon:'index',
        url: '/pages/main/index/index',
        authId: 'xxxxxxxxxx',
        displayName: '主页',
      }
  ```

* 跳转逻辑应全部由`appBoot`完成，不要修改pages.json来进行跳转页面修改。

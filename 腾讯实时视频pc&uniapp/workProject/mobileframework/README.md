# simpleWay @1.0.0
[TOC]
## 1、安装
### 1.1、拉取框架仓库，当做项目子模块
如果我们需要新建一个项目A，我们新建了一个 projectA 文件夹。定位到 projectA 文件夹：

```
cd projectA
```
拉取框架仓库，当做项目子模块

```
git submodule add http://gitlab.smartgalaxy.net:8680/FE/technology/mobileframework.git
```
定位到 mobileframework 目录，安装框架依赖，（需注意用npm安装依赖，cnpm加载会出现程序报错问题）

```
cd mobileframework
npm install
```

```
## 2、目录结构说明

安装好 mobileframework 框架之后，项目的目录应设置为如下所示
```
├─src                       // 开发目录
│  ├─base-components        // 基础组件
│  ├─business-components    // 业务组件
│  ├─common                 // 公共函数
│  ├─inerceptor             // 拦截器
│  ├─layout                 // 页面架构
│  ├─pages                  // 页面
├─static                    // 静态资源
└─mobileframework                 // mobileframework
```
## 3、pages
在 src/pages 文件夹中每个文件夹对应着一个页面。

### 3.1 新建页面

新建一个文件夹，在新建的文件夹中新建一个.vue文件，命名方式为：

```
index.vue

# 比如
index.vue

# 内容
<template>
    <div class="page-product">
        <h1>我是 product 页面</h1>
        <span>产品页面</span>
    </div>
</template>
<style lang="scss" scoped>
    // 局部样式
</style>
<style lang="scss">
    .page-product{
        // 全局样式
    }
</style>
```
新建其他文件，它们分别是：

```
# 文件名：model.js
# 内容：
export let props = {}
export let model = {}
export let computed = {}

# 文件名：event.js
# 内容：
export let life = {}
export let event = {}
export let watch = {}

# 文件名：methods.js
# 内容：
export default {}
```
这4个文件的含义是：

```
数据：model.js
事件：event.js
方法：methods.js
```
一个页面的目录组成一般是：

```
├─pages
│  └─product                        // 页面目录
│     ├─index.vue                   // 视图文件
│     ├─model.js                    // 数据文件
│     ├─event.js                    // 事件文件
│     ├─methods.js                  // 方法文件
```


那么，即可在浏览器中访问 http://localhost:8080/#/product 来预览界面。

#### 3.1.1、数据文件（model.js）
数据文件定义了界面的数据模型，包含了 vue 的三个必需选项：

```
export let props = {}
export let model = {}
export let computed = {}
```
- props 的用法完全等同于 [[vue选项：props]](https://cn.vuejs.org/v2/api/#props)
- model 与 [[vue选项：data]](https://cn.vuejs.org/v2/api/#data) 类似，区别在于：「未完待续」。
- computed 的用法完全等同于 [[vue选项：computed]](https://cn.vuejs.org/v2/api/#computed)

#### 3.1.2、事件文件（event.js）
页面的所有变化都是事件驱动的，vue 的生命周期也是一种事件：

```
// 生命周期
export let life = {
  created () {
    this.methods('getTableData')
  }
}
// 事件
export let event = {
  clickRow (row) {
    this.methods('setCurrentDetail', row)
  },
  clickSubmit () {
    this.methods('getTableData')
  },
  clickReset () {
    this.methods('resetFilter')
    this.methods('getTableData')
  }
}
// 数据监听
export let watch = {
  formData () {
    this.methods('test')
  }
}
```
事件通过 this.methods('mid') 来调用相应的方法。


#### 3.1.3、视图文件（.vue）
视图文件的职责是声明界面的结构和样式，视图文件主要依赖 model.js 中定义的数据、event.js 中定义的事件。

视图文件中绑定的数据来自于 mode.js

视图文件中绑定的事件来自于 event.js

**样式**

视图文件中可以使用全局样式、局部样式，用法详见 [[Scoped CSS]](https://lvyongbo.gitbooks.io/vue-loader/content/features/scoped-css.html)

但是请注意，使用全局样式的时候，请在样式的外围加上这个页面（组件）的命名空间：

```
<style lang="scss">
    .page-product{
        // 全局样式
    }
</style>
```
**私有组件**

「未完待续」
#### 3.1.4、方法文件（methods.js）
「未完待续」
**方法层切面**

「未完待续」

### 3.2 页面路由
「未完待续」

## 4、layout
「未完待续」

## 5、components
「未完待续」

### 5.1 基础组件与业务组件

按照开发流程，在接到项目时，我们首先要评估需要预封装那些组件：
「未完待续」

### 5.2 新建组件
「未完待续」
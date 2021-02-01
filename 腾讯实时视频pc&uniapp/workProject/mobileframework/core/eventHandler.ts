import Vue from 'vue'
const utils:any = require('./utils.js').default
const get:any = require('./methodsHandler.js').default
export default function (this: Vue, event:Object, life:Life, watch:Object, methodsSource: any) {
  let E, L, W
  let component:any = this
  /**
   * 调用同目录下 methods.js 里的方法
   * @param name 方法名
   * @param param 其他参数
   * @returns {*}
   */
  let methods:Methods = (name:string, ...param:any):any|never => {
    let func = methodsSource[name] || methodsSource.prototype[name] // 目标函数，methodsSource可能是字面量对象，也可以是类
    if (!func) throw new Error('找不到 methods：' + name)
    // 限制了数据权限的vue实例
    // let context = Vue.prototype.window.Proxy ? new Proxy(component, {
    //   get: get.bind(component, func.allowPath)
    // }) : component
    let context = component
    return func.apply(context, param)
  }
  let eventContext
  component.methods = methods
  eventContext = component
  // if ((window as any).noProxy) {
  //   component.methods = methods
  //   eventContext = component
  // } else {
  //   eventContext = new Proxy(component, {
  //     get (target, name) {
  //       if (target === component && name === 'methods') {
  //         return methods
  //       }
  //       if (target === component) {
  //         if (name === '_data') {
  //           return utils.readOnlyProxy(target)
  //         }
  //         if (
  //           component._computedWatchers[name] // 开发者试图访问带 input或 output 的Model
  //           || component.$data.hasOwnProperty(name) // 开发者试图访问其他 Model)
  //           || (component.$props && component.$props.hasOwnProperty(name)) // 开发者试图访问其他 Model)
  //         ) {
  //           return utils.readOnlyProxy(component[name], 'event中不允许修改model')
  //         }
  //       }
  //       return target[name]
  //     }
  //   })
  // }
  E = changeEventContext.call(this, event, eventContext)
  L = changeEventContext.call(this, life, eventContext)
  W = changeEventContext.call(this, watch, eventContext)
  return {E, L, W}
}
function changeEventContext(event:any, eventContext:any) {
  let newEvent:any = {}
  event && Object.keys(event).forEach(key => {
    newEvent[key] = function () {
      let targetEvent
      if (typeof event[key] === 'function') {
        targetEvent = event[key]
      } else if (event[key].handler) {
        targetEvent = event[key].handler
      }
      return targetEvent.apply(eventContext, arguments)
    }
  })
  return newEvent
}
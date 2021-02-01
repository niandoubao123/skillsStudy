import utils from './utils.js'
get.currentPath = ''
/*
例如：
 @Model('pageListUser.output')
 那么这个 methods 应该能够访问、修改 output以及 output的属性
 */
export default function get (allowPath = '', target, name) {
  if (window.noProxy) return target[name]
  if (
    target === this &&
    (
      this._computedWatchers[name] // 开发者试图访问带 input或 output 的Model
      || this.$data.hasOwnProperty(name) // 开发者试图访问其他 Model
    )
  ) { // 开发者试图访问 Model 数据
    if (allowPath === name) {
      // console.log(1, name)
      return target[name]
    }
    let computedWatchersName = allowPath.match(/^[^\.]+/)
    computedWatchersName = computedWatchersName && computedWatchersName[0]
    if (computedWatchersName === name) { // 允许访问
      get.currentPath = name
      // console.log(2, name)
      return new Proxy(target[name], {
        get: get.bind(this, allowPath)
      })
    }
    // console.log(3, name)
    return utils.readOnlyProxy(target[name], 'methods 中不允许修改 this.' + name + '，除非定义了可修改数据的装饰符', true)
  } else if (target !== this) {
    get.currentPath += '.' + name
    
    if (get.currentPath === allowPath) {
      let result = this
      let allowArr = allowPath.split('.')
      allowArr.forEach(function (item, index) {
        if (allowArr.length - 1 === index) return
        result = result[item]
      })
      // console.log(4, name)
      return result[name]
    } else if (allowPath.includes(get.currentPath)) {
      // 注意： 不可枚举的数据不可代理
      if (allowPath.match(/\./g).length > 1) {
        let nextName = allowPath.replace(get.currentPath + '.', '').replace(/^([^\.]+)\..+$/, '$1')
        if (!target[name].propertyIsEnumerable(nextName) && target[name][nextName]) {
          console.warn(get.currentPath + '.' + nextName + ' 是不可枚举属性，无法通过代理限制访问，实际生效的装饰符为：' + get.currentPath)
          return target[name]
        }
      }
      // console.log(5, name)
      return new Proxy(target[name], {
        get: get.bind(this, allowPath)
      })
    } else {
      return utils.readOnlyProxy(target[name], 'methods 中不允许修改 this.' + get.currentPath + '，除非定义了可修改数据的装饰符', true)
    }
  }
  // console.log(6, name)
  return target[name] // 其他属性，随便访问
}
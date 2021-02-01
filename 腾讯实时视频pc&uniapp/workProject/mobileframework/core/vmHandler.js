import utils from './utils.js'
export default function () {
  return
  // if (window.noProxy) return
  // this 就是 vm
  let refs = this.$refs
  let slots = this.$slots
  this.$refs = new Proxy(refs, {
    get (target, name) {
      let vm = target[name]
      newProxy.proxyPath = ''
      if (vm) {
        return newProxy (target, name)
      }
      return vm
    }
  })
  this.$slots = new Proxy(slots, {
    get (target, name) {
      let slot = target[name]
      newProxy.proxyPath = ''
      if (slot) {
        return newProxy(target, name)
      }
      return slot
    }
  })
  let parent = this.$parent
  if (parent) {
    this.$parent = utils.readOnlyProxy(parent)
  }
  let root = this.$root
  if (root) {
    this.$root = utils.readOnlyProxy(root)
  }
}
function newProxy (target, name) {
  let nextTarget = target[name]
  if (!nextTarget || typeof nextTarget !== 'object') {
    return nextTarget
  }
  if (nextTarget instanceof Text || nextTarget.outerHTML) {
    return nextTarget // 不 return 的话，默认 slot 是 dom 元素时会报错
  }
  newProxy.proxyPath += '.' + name
  if (newProxy.proxyPath.match(/\./g).length > 5) {
    return nextTarget // slot 太变态，一路代理下去直到报错，代理5个不行就放弃了
  }
  return getModelProxy(nextTarget)
}
function getModelProxy (nextTarget) {
  return new Proxy(nextTarget, {
    get (target, name) {
      if (typeof name === 'symbol') {
        return target[name]
      }
      if (target._computedWatchers) {
        if (name === '_data') {
          return utils.readOnlyProxy(target)
        }
        if (target._computedWatchers[name] || target.$data.hasOwnProperty(name)) { // 如果是数据
          return utils.readOnlyProxy(target)[name]
        }
        return target[name]
      } else {
        let nextTarget = target[name]
        if (!nextTarget || typeof nextTarget !== 'object' || nextTarget.outerHTML) {
          return nextTarget
        }
        return new Proxy(nextTarget, {
          get: newProxy
        })
      }
    }
  })
}
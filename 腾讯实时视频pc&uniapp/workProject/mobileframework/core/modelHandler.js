import Vue from 'vue'
export default function (model = {}) {
  let result = {}
  let data = {i: [], o: []}
  let computed = {}
  Object.keys(model).forEach(apiName => {
    if (!model[apiName]) {
      result[apiName] = model[apiName]
      return
    }
    let input = model[apiName].input
    let output = model[apiName].output
    if (input) {
      let defaultInput = JSON.stringify(input.value)
      Object.defineProperty(input, 'defaultValue', {
        get () {
          return defaultInput
        }
      })
      // input、output 里面的 get set 写法是不合法的，并不能起到 get set 的功能，需要处理一下才行
      data.i = data.i.concat(getSet(input))
      let inputValue = input.value
      Object.defineProperty(input, 'value', {
        get () {
          return inputValue
        },
        set (val) {
          vueSet.call({value: inputValue}, val)
        }
      })
    }
    if (output) {
      let defaultOutput = JSON.stringify(output.value)
      Object.defineProperty(output, 'defaultValue', {
        get () {
          return defaultOutput
        }
      })
      // input、output 里面的 get set 写法是不合法的，并不能起到 get set 的功能，需要处理一下才行
      data.o = data.o.concat(getSet(output))
      let outputValue = output.value
      Object.defineProperty(output, 'value', {
        get () {
          return outputValue
        },
        set (val) {
          vueSet.call({value: outputValue}, val)
        }
      })
    }
    if (!input && !output) {
      result[apiName] = model[apiName]
      return
    } else {
      result[apiName] = {}
    }
    Object.defineProperties(result[apiName], Object.assign({}, input && {
        input: {
          get: (() => input),
          set: function () {
            throw new Error('不允许对 input 直接赋值')
          },
          enumerable: true,
        },
      }, output && {
        output: {
          get: (() => output),
          set: function () {
            throw new Error('不允许对 output 直接赋值')
          },
          enumerable: true,
        }
      }))
  })
  let id = parseInt(Math.random() * 100)
  Object.keys(model).forEach((apiName, index) => {
    if (!model[apiName]) {
      data[apiName] = model[apiName]
      return
    }
    let input = model[apiName].input
    let output = model[apiName].output
    if (!input && !output) {
      data[apiName] = model[apiName]
    } else {
      data['d' + id + apiName] = model[apiName]
      computed[apiName] = function () {
        return result[apiName]
      }
    }
  })
  return {
    data,
    computed
  }
}
function getSet(obj) {
  /*
   例如原始数据如下：
   userList: {
     input: {
       value: {
         page: 1,
         pageSize: 10,
         searchUserLoginName: undefined,
         searchUserRealName: undefined,
         searchUserRoleId: undefined,
       },
     },
     get name: {
       get () {
        return this.value.name
       }
     }
   }
   name 属性并不在 userList.input.value 里面，所以需要单独处理
   */
  let vueValue = []
  Object.keys(obj).forEach(key => {
    if (key === 'value') return
    if (key === 'get') return
    if (key === 'set') return
    // if (key in obj.value) return
    let item = obj[key]
    if (typeof item !== 'object') {
      item = obj[key] = {
        value: item,
        get () {
          return this.value
        },
        set (val) {
          this.value = val
        }
      }
    } else if (!item.get && !item.set) {
      vueValue.push(item)
      return
    }
    item.parent = obj
    let context = item
    vueValue.push(item)
    Object.defineProperty(obj, key, {
      get: (item && item.get && item.get.bind(context)) || (() => undefined),
      set: (item && item.set && item.set.bind(context)) || (vl => undefined),
      // enumerable: false, // 不可枚举造成的不良影响是不可代理
    })
  })
  // 给 input、output 添加一个不可枚举的 reset 方法，方便重置为默认值
  obj.value && Object.defineProperty(obj.value, 'reset', {
    value () {
      vueSet.call(obj, JSON.parse(obj.defaultValue))
    }
  })
  return vueValue
}
/*
 set 为什么要这么处理：
 原始数据经过 modelHandler.js 处理过后，会将数据中的 value 添加到 vue 的 data 里，用来触发 vue 的响应式
 如果直接对 value 赋值之后，新的 value 并不能触发 vue 的响应式，vue 的 data 里还是旧的 value
 所以通过 Object.assign(oldValue, input.value) 的形式，更新整个 value
 */
function vueSet (val) {
  let set = this.set || (val => this.value = val)
  if (typeof this.value === 'object') { // 对象
    let oldValue = this.value
    set.call(this, val)
    if (oldValue instanceof Array) { // 数组
      oldValue.splice(0)
      if (this.value instanceof Array) {
        this.value.forEach(item => {
          oldValue.push(item)
        })
      } else {
        throw new Error('旧数据是数组，新数据不是，请确认')
      }
    } else {
      if (!this.value) {
        throw new Error('发现有为 null 的 value, 请核实, 有可能是接口响应的数据为 null')
      }
      Object.keys(this.value).forEach(key => {
        if (!oldValue.hasOwnProperty(key)) {
          Vue.set(oldValue, key, this.value[key]) // 如果value里新增了一些字段, 那么这些字段默认是不响应式的, 需要 Vue.set
        }
      })
      Object.keys(oldValue).forEach(key => {
        oldValue[key] = this.value[key]
      })
    }
    this.value = oldValue
  } else {
    set.call(this, val) // 其他
  }
}
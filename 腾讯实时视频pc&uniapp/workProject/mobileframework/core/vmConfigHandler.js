import modelHandler from './modelHandler.js'
import eventHandler from './eventHandler.ts'
import vmHandler from './vmHandler.js'
import utils from './utils.js'
export default function (model, life, event, watch, methodsSource) {
  let {computed} = modelHandler(utils.deepClone(model.model))
  let L = life || {}
  let E = event || {}
  let W = {}
  let C = {}
  if (computed) {
    Object.keys(computed).forEach(key => {
      C[key] = function () {
        return this.C[key]()
      }
    })
  }
  if (watch) {
    Object.keys(watch).forEach(key => {
      if (typeof watch[key] === 'function') {
        W[key] = function () {
          return this.W[key](...arguments)
        }
      } else {
        W[key] = Object.assign({}, watch[key], {
          handler: function () {
            return this.W[key](...arguments)
          }
        })
      }
    })
  }
  return {
    props: model.props,
    data () {
      let EL = eventHandler.call(this, E, L, watch || {}, methodsSource)
      let {computed, data} = modelHandler(utils.deepClone(model.model))
      this.C = computed
      Object.assign(this, EL.E)
      this.L = EL.L
      this.W = EL.W
      vmHandler.call(this)
      return data
    },
    filters: model.filters,
    watch: W,
    computed: {
      ...C,
      ...model.computed,
    },
    ...(function () {
      let life = {}
      Object.keys(L).forEach(key => {
        life[key] = function () {
          if (this && this.L && this.L[key]) {
            return this.L[key](...arguments)
          } else {
            return L[key](...arguments)
          }
        }
      })
      return life
    })()
  }
}

import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  console.log('vue init')
  this._init(options)
}

// Vue.prototype 挂载 _init 函数
initMixin(Vue)
// Vue 实例方法 / 数据
// Object.defineProperty(Vue.prototype, '$data', dataDef)
// Object.defineProperty(Vue.prototype, '$props', propsDef)
// Vue.prototype 挂在了$set $del $watch
stateMixin(Vue)
// Vue 实例方法 / 事件
// Vue.prototype 上挂载 $on $once $off $emit
eventsMixin(Vue)
// Vue.prototype 上挂载 _update $forceUpdate $destroy
// _update  是重点 
lifecycleMixin(Vue)
// 给 Vue.prototype 上挂载需要用到的工具函数 还有 $next-tick 和 _render
renderMixin(Vue)

export default Vue

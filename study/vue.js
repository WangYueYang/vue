function Vue(options) {
  console.log('vue init')
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)

function initMixin(Vm) {
  console.log('initMixin')
  Vm.prototype._init = function(options) {
    console.log('this.init', options)
  }
}

function stateMixin(Vm) {
  console.log('stateMixin', Vm)
}
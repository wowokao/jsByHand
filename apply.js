Object.defineProperty(Function.prototype, 'apply6', {
  value: function(context, args = []){
    context = Object(context) || window
    const key = Symbol()
    context[key] = this;
    const res = context[key](...args)
    delete context[key]
    return res
  },
  writable: true,
  configurable:true
})
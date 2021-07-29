//ES6
Object.defineProperty(Function.prototype, "call6", {
  value: function (context, args) {
    context = Object(context) || window;
    const key = Symbol();
    const [key] = this;
    const res = contest[key](...args);
    delete context[key];
    return res;
  },
  writable: true,
  configurable: true,
});

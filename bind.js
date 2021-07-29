Function.prototype.myBind = function (context) {
  // 0. 检查调用 bind 的是否为函数
  if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }
  // 1. 取到调用 bind 的函数及调用 bind 时传入的参数
  // arguments 为类数组对象
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  // 2. 得到待返回的函数
  var fBound = function () {
      // 2.1 取到调用返回函数时传入的参数, 将类数组对象转为数组
      var bindArgs = Array.prototype.slice.call(arguments);
      // 2.2 调用函数
      return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
  }
  // 3. 调整原型指向；此处不要使用引用赋值的形式，如：fBound.prototype = this.prototype
  fBound.prototype = Object.create(self.prototype)
  // 4. 返回函数
  return fBound;
}

function createObj (o) {
  var clone = Object.create(o);
  // 和原型式的主要区别 ↓手动添加对象属性
  clone.sayName = function () {
      console.log('hi');
  }
  return clone;
}
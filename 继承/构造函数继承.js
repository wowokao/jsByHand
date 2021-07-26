//使用 call 或 apply 在子类构造函数中调用父类构造函数
// father constructor
function Parent() {
  this.names = ["kevin", "daisy"];
}
//children constructor
function Child() {
  // 关键代码 call father constructor in child constructor
  //只能取到父类实例属性及方法，无法取到父类原型属性及方法；
  //无法函数复用，复制了父类构造函数中的属性和方法，每个子类都有父类实例函数的副本，影响性能
  // 无法用 instanceof 判断子类与父类关系，子类非父类的实例；
  Parent.call(this);
}
// children object
var child1 = new Child();
//可以传参
child1.names.push("yayu");
//解决引用类型属性被共享的问题；
console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();

console.log(child2.names); // ["kevin", "daisy"]

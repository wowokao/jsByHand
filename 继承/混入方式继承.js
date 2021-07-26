// 解决前面没有办法多继承父类原型属性方法的问题

// 使用 Object.assign

// 此处需要注意的地方是：instanceof 只能判断使用 Object.create 的父类
function MyClass() { 
  // 关键代码
  SuperClass.call(this);
  OtherSuperClass.call(this);
}

// 关键代码
MyClass.prototype = Object.create(SuperClass.prototype);

// 关键代码 ↓
Object.assign(MyClass.prototype, OtherSuperClass.prototype);

// 关键代码
MyClass.prototype.constructor = MyClass;

// 在之类上附加方法
MyClass.prototype.myMethod = function() {
// do sth
};
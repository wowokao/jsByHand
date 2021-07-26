
/**
 * 构造函数在技术上是常规函数。不过有两个约定：
1.它们的命名以大写字母开头。
2. 它们只能由 "new" 操作符来执行。
 */

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

/**
 * 当一个函数被使用 new 操作符执行时，它按照以下步骤：

1. 一个新的空对象被创建并分配给 this。
2. 函数体执行。通常它会修改 this，为其添加新的属性。
3. 返回 this 的值。
4. 使用 new 新建一原型为 null 的实例，实例的 __proto__ 值会变为 Object.prototype

 */
function myNew() {
  // 1. 新建对象
  // 2. 连接原型链
  // 2.1 取得构造函数 arguments = (Constructor, ...param)
  let Constructor = [].shift.call(arguments);
  // 2.2 为新建对象的 [[prototype]] 赋值
  let obj = Object.create(Constructor.prototype === null ? 
    Object.prototype : Constructor.prototype);
  // 3. 调用构造函数，并改变 this 指向
  let ret = Constructor.apply(obj, arguments);
  // 4. 如构造函数返回结果为对象(非 null)，则直接返回，否则返回新建对象，忽略返回值
  return (typeof ret === 'object' && ret !== null) ? ret : obj;
}
function person(name, age) {
  this.name = name
  this.age = age
}
let p = myNew(person, '布兰', 12)
console.log(p)  // { name: '布兰', age: 12 }




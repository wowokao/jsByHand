/**
 * 优点：
可取到父类实例属性方法及原型属性方法

缺点：
包含引用类型值的原型，会导致父类实例属性被所有实例共享；
无法实现多继承；无法向父类构造函数传参
 */
//父类Constructor 
function Parent() {
  this.name = "kevin";
}
//父类Prototype
Parent.prototype.getName = function () {
  console.log(this.name);
};
//子类constructor
function Child() {}

// 关键代码 子类的prototype挂上父类的实例，
// 子类实例的__proto__可以拿到
// 父类实例的属性和方法和父类构造函数的属性和方法， 但也导致共享。
Child.prototype = new Parent();

var child1 = new Child();

console.log(child1.getName(), child1); // kevin

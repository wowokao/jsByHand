//使用 Object.create 和 call（apply）

function Parent (name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
  console.log(this.name)
}

function Child (name, age) {
  // 关键代码
  Parent.call(this, name);
  this.age = age;
}
// 关键代码
Child.prototype = Object.create(Parent.prototype);
// 关键代码
Child.prototype.constructor = Parent;

var child1 = new Child('kevin', '18');

console.log(child1)
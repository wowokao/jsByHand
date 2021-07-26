//instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
//object instanceof constructor
function myInstanceOf(object, constructor) {
  //1. 检查object的类型
  if((typeof object !== 'object' && typeof object !== 'function') || object ===null) return false
  //2. 取到object的__proto__和constructor的prototype。进行比较
  let constructorProto = constructor.prototype
  object = object.__proto__
  while(true){
    if(object === null) return false
    if(object === constructorProto) return true
    object = object.__proto__
  }
}
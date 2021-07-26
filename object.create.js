/*
 * @Author: Jimmy Fu
 * @Date: 2021-07-26 15:30:17
 * @LastEditTime: 2021-07-26 15:30:17
 * @LastEditors: Jimmy Fu
 * @Description: 
 * @FilePath: /手写/object.create.js
 */
/**
 * 如直接使用 Object.create 定义，则 create 会变为可枚举属性，
 * 因此如采用此种形式，必须使用 Object.defineProperty !
 */

 function myCreate(proto, propertiesObject) {
  // 1. 验证 proto 为构造函数/对象(/null)
  if (typeof proto !== 'object' && typeof proto !== 'function') {
      throw new TypeError('Object prototype may only be an Object: ' + proto);
  // } else if (proto === null) {
      // 在 ES5 中 Object.create支持设置为[[Prototype]]为null，但因为那些ECMAScript5以前版本限制，此 polyfill 无法支持该特性。
      // throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
  }
  // 2. 内部新建一构造函数
  function F() { }
  // 3. 将构造函数的原型指向传入的原型对象
  F.prototype = proto;
  // 4. 新建一构造函数的实例
  var obj = new F();
  // 5. 如为 null, 需要再将实例的原型指向 null。否则，使用 new 新建实例时，会将原型指向 Object.prototype
  if (proto === null) {
      obj.__proto__  = null;
  }
  // 6. 为实例添加属性
  if (propertiesObject) {
      Object.defineProperties(obj, propertiesObject)
  }
  return obj;
};
//记忆
Object.defineProperty(Object, 'myCreate', {
  value: function myCreate(proto, properties) {
      if(typeof proto !== 'function' && typeof proto !== 'object') {
          throw new TypeError('Object prototype may only be an Object or null:' + proto);
      }
      function F() {};
      F.prototype = proto;
      const obj = new F();
      if(proto === null) {
          obj.__proto__ = null;
      }
      if(properties) {
          Object.defineProperties(obj, properties);
      }
      return obj;
  },
  writable: true,//重点
  configurable: true//重点
})
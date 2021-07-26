//const实际上保证的，并不是变量的值不得改动，
//而是变量指向的那个内存地址所保存的数据不得改动,
const constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach((key, i) => {
      if (obj[key] && typeof obj[key] === 'object') {
          constantize(obj[key]);//递归冻结
      }
  })
}
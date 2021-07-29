Object.defineProperty(Object, 'myIs', {
  value: function(x, y){
    if(x === y){
      // +0 -0 
      return x !== 0 || 1/x === 1/y
    }else{
      // NaN NaN => NaN !== NaN
      return x !== x && y !== y
    }
  },
   writable: true,
   configurable: true
})
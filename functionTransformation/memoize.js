function memoize(fn) {
  let cache = {}

  return function(...args) {
    
      fn(...args)
  }
}

const sum = (a,b) => a+b;

const memoizedFn = memoize( sum)
console.log( memoizedFn(1,2))

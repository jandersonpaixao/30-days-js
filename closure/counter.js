var createCounter = function (n) {
  let counter = n
  function next() {
      return counter++
  };

  return next
};


const counter = createCounter(20)
console.log(counter())
console.log(counter())
console.log(counter())

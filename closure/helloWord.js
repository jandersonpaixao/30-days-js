
var createHelloWorld = function() {
     
  var sayHello = 'Hello World'

 function sayHelloWorld (...args) {
     return console.log(sayHello)
 }

 return sayHelloWorld;
};


const f = createHelloWorld();
f();

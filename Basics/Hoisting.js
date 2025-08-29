// what is Hoisting in javascript?
// Variable aur function declarations memory me "top" pe move hote hain before execution.
// var hoists with undefined, let/const hoist but in temporal dead zone

//  Hoisting Example
console.log(a);  // undefined (var hoisting)
var a = 10;

// console.log(b);  // ReferenceError (let/const hoist but TDZ me hain)
let b = 20;

// Function hoisting
sayHello();  // Works! Function hoisted
function sayHello() {
  console.log("Hello from hoisted function!");
}

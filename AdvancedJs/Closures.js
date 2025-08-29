// what is cosures
// Ek inner function jo apne outer function ke variables ko access kar paata hai, even after outer function execute ho chuka ho.
// Why use?
// Data privacy (sensitive data hide karne ke liye)
// Function factories

// Closure Example
function outerFunction(outerVar) {
  return function innerFunction(innerVar) {
    console.log("Outer Variable:", outerVar);
    console.log("Inner Variable:", innerVar);
  };
}

const newFunc = outerFunction("Hello"); 
newFunc("World");  
// Output:
// Outer Variable: Hello
// Inner Variable: World

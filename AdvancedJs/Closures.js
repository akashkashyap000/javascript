// what is cosures
// Ek function ke andar ek aur function jo outer function ke variables ko access kar paata hai.

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

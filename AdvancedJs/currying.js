// Ek technique jisme ek function ek argument leke naya function return karta hai.
// Why use?
// Reusability
// Partial application (customized functions banana easy hota hai)
// Currying Example
function sum(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(sum(2)(3)(4)); // 9

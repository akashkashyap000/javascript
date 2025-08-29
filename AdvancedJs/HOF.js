// Aise functions jo dusre function ko as argument lete hain ya return karte hain.

// Why use?
// Functional programming
// Code readable aur concise banta hai (map, filter, reduce)
// A higher-order function is a function that either:
// 1. Takes another function as an argument
// 2. Returns a function

// Example 1: Passing a function as an argument
function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

function applyFunction(func, values) {
  return values.map(func);
}

let numbers = [1, 2, 3, 4];
console.log("\nSquares:", applyFunction(square, numbers));
console.log("Cubes:", applyFunction(cube, numbers));


// Example 2: Returning a function
function makeMultiplier(factor) {
  return function (x) {
    return x * factor;
  };
}

let double = makeMultiplier(2);
let triple = makeMultiplier(3);

console.log("\nDouble 5:", double(5));
console.log("Triple 5:", triple(5));


// Example 3: Using built-in HOFs (map, filter, reduce)
// map -> applies a function to each element
let squares = numbers.map(square);

// filter -> keeps elements that satisfy a condition
let evens = numbers.filter(num => num % 2 === 0);

// reduce -> reduces array to a single value
let sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log("\nSquares with map:", squares);
console.log("Even numbers with filter:", evens);
console.log("Sum with reduce:", sum);
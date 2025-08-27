// =======================
// JavaScript Basics
// =======================

// 1. Variables & Data Types
let name = "Akash";     // string
let age = 21;           // number
let isStudent = true;   // boolean
console.log("Name:", name, "Age:", age, "Student:", isStudent);

// 2. Functions
function greet(user) {
  return "Hello, " + user + "!";
}
console.log(greet("Akash"));

// 3. If-Else
let marks = 75;
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 60) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

// 4. Loops
for (let i = 1; i <= 5; i++) {
  console.log("For loop number:", i);
}

let j = 1;
while (j <= 5) {
  console.log("While loop count:", j);
  j++;
}

// 5. Arrays
let fruits = ["Apple", "Banana", "Mango"];
console.log("First fruit:", fruits[0]);
fruits.push("Orange"); // add new element
console.log("Updated fruits:", fruits);

// 6. Objects
let person = {
  name: "Akash",
  age: 21,
  city: "Mumbai"
};
console.log("Person name:", person.name);
console.log("Person city:", person["city"]);

// 7. Arrow Functions
const add = (a, b) => a + b;
console.log("Sum:", add(5, 3));

// 8. Map, Filter, Reduce (Important for basics + HOFs)
let numbers = [1, 2, 3, 4, 5];

// Map: create new array with each number * 2
let doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

// Filter: keep only even numbers
let evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens);

// Reduce: sum of all numbers
let total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Total sum:", total);

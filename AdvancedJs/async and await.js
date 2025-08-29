Definition:
// Async/await promises ka cleaner syntax hai jo async code ko synchronous jaisa banata hai.
// Why use?
// Code readable hota hai
// Error handling easy hoti hai

// Async/Await Example
const fetch = require("node-fetch");

async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await res.json();
  console.log(data.name);
}

getUser();

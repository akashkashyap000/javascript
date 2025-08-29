Definition:
// Modules code ko chhote parts me tod kar reusable banate hain.

// Why use?
// Maintainable aur scalable backend code likhne ke liye

// math.js
function add(a, b) {
  return a + b;
}
module.exports = add;

// app.js
const add = require("./math");
console.log(add(5, 7));

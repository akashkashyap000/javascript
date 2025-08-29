// Express.js me middleware ek function hai jo request aur response ke beech execute hota hai.

//Why use?
// Request processing ko modular banata hai
// Logging, authentication, error handling ke liye

const express = require("express");
const app = express();

// Custom middleware
function logger(req, res, next) {
  console.log("Request received at:", Date.now());
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

app.listen(3000, () => console.log("Server running on port 3000"));

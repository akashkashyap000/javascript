// Event loop JavaScript ka mechanism hai jo asynchronous tasks (setTimeout, promises) ko handle karta hai.
// Why use?
// JavaScript single-threaded hone ke bawajood concurrent kaam kar paata hai.

    console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Inside Promise");
});

console.log("End");

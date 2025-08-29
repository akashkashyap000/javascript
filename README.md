
Yeh file JavaScript ke **Basics**, **Advanced Concepts** aur **Backend use-cases** ka quick reference hai.  
---
# Basics  
 1. Variables
**Definition:** Data store karne ke liye (var, let, const).  
**Why use?** Values ko store/modify karne ke liye.  
```js
let a = 10; const b = 20;
console.log(a+b);

2. Functions
Definition: Reusable block of code.
Why use? Reusability & modularity.

function add(x,y){ return x+y; }
console.log(add(2,3));
3. Hoisting

Definition: Declarations top pe move hote hain.
Why use? Errors samajhne ke liye.

console.log(a); // undefined
var a = 5;

🔥 Advanced
4. Closures

Definition: Inner fn outer vars access karta hai.
Why use? Data privacy.

function outer(){ let c=0; return ()=>++c; }
const count = outer();
console.log(count());

5. Higher-Order Functions

Definition: Fn jo fn ko input/output banata hai.
Why use? Cleaner functional code.

[1,2,3].map(n=>n*2); // [2,4,6]

6. Currying

Definition: Fn ek arg leke next fn return kare.
Why use? Reusability.

const sum=a=>b=>c=>a+b+c;
console.log(sum(1)(2)(3));

7. Promises

Definition: Future value represent karta hai.
Why use? Async handle karna.

Promise.resolve("Done").then(console.log);

8. Async/Await

Definition: Promise ka cleaner syntax.
Why use? Readable async code.

async function hi(){ return "Hello"; }
hi().then(console.log);

9. Event Loop

Definition: Async tasks (Promise, setTimeout) manage karta hai.
Why use? Non-blocking I/O in Node.js.

console.log("Start");
setTimeout(()=>console.log("Timeout"));
Promise.resolve().then(()=>console.log("Promise"));
console.log("End");

⚡ Backend
10. Modules

Definition: Code ko tod ke reusable banata hai.
Why use? Scalable apps.

// math.js
module.exports=(a,b)=>a+b;

11. Middleware (Express)

Definition: Fn jo req-res ke beech run hota hai.
Why use? Logging, auth, error handling.

app.use((req,res,next)=>{console.log("Log");next();});

12. File Handling

Definition: Node.js me file read/write.
Why use? Config/log management.

const fs=require("fs").promises;
fs.readFile("a.txt","utf-8").then(console.log);

13. DB Connection (Closure)

Definition: Private vars ke sath connection.
Why use? Security.

function conn(){const pwd="secret";return{connect:()=>console.log(pwd)};}
conn().connect();

✅ Conclusion
Ye repo JavaScript ke Basics, Advanced aur Backend concepts ka quick reference hai.
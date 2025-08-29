// Node.js me fs module ka use karke files ko read, write, update karna possible hai.

// Why use?

// Config files, logs aur data ko backend me manage karne ke liye.

const fs = require("fs").promises;

async function readFile() {
  try {
    const data = await fs.readFile("example.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

readFile();

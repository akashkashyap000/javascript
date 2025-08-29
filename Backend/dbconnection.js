// Database connection object jo closure ka use karke private credentials ko hide karta hai.
// Why use?
// Security
// Controlled access to database
// Simulating DB connection using closure

function createConnection() {
  const password = "superSecret123"; // private variable

  return {
    connect: function () {
      console.log("Connected to DB with password:", password);
    }
  };
}

const db = createConnection();
db.connect();

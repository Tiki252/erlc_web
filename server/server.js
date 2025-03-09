require("dotenv").config();

const mysql = require("mysql2");

// Connect to the Database using .env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Check the connection
connection.connect((err) => {
  if (err) {
    console.error("Fehler bei der Verbindung zur Datenbank:", err.stack);
    return;
  }
  console.log("Erfolgreich mit der Datenbank verbunden!");
});

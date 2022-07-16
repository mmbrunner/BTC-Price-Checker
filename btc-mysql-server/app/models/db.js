const mysql = require("mysql");
const dotenv = require("dotenv").config({ path: "../.env"});

// Create a connection to the database
const connection = mysql.createConnection({
    host: dotenv.HOST,
    user: dotenv.USER,
    password: dotenv.PASSWORD,
    database: dotenv.DB
});
// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});
module.exports = connection;

console.log(dotenv.HOST);

console.log(process.env.HOST);
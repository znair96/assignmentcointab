const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P@ssw0rd",
  database: "users",
});

con.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Mysql connected ...");
});

module.exports = con;

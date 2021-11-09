const express = require("express");
const app = new express();
const path = require("path");
const port = 8000;
const mysql = require("./config/sql");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "assets")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", require("./routes/routes"));

app.listen(port, function () {
  console.log("Server running successfully on port: " + port);
});

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// body parser
app.use(bodyParser.urlencoded());
app.set("view engine", "ejs");

app.use((req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("It is wokring");
});

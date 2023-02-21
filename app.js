import express from "express";
const app = express();

// body parser
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use((req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("It is wokring");
});

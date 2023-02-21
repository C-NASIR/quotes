import express from "express";
import sequelize from "./util/database.js";
const app = express();

// body parser
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.disable("x-powered-by"); // do not identify Express

app.use((req, res) => {
  res.render("home");
});

const port = process.env.PORT || 3000;

sequelize
  .sync()
  .then((_) => {
    app.listen(port);
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

import express from "express";
import sequelize from "./util/database.js";
import { connectModels } from "./util/associations.js";
import User from "./models/user.js";

const app = express();

// body parser
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.disable("x-powered-by"); // do not identify Express

app.use((req, res, next) => {
  //temp needed for posts
  User.findByPk(1)
    .then((user) => {
      req.body.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

app.use((req, res) => {
  res.render("home");
  console.log("still going after ward lol");
});

const port = process.env.PORT || 3000;
connectModels(); // connecting models

try {
  await sequelize.sync();
  app.listen(port);
  console.log("connection successful");
} catch (err) {
  console.log("db connection failed ", err);
}

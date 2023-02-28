import express from "express";
import sequelize from "./util/database.js";
import session from "./middleware/session.js";
import { connectModels } from "./util/associations.js";
import User from "./models/user.js";
import admin from "./routes/admin.js";
import general from "./routes/general.js";

const app = express();

// body parser
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.disable("x-powered-by"); // do not identify Express
app.use(express.static("public"));
app.use(session);

app.use((req, res, next) => {
  //temp needed for posts
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

app.use(admin);
app.use(general);

const port = process.env.PORT || 3000;
connectModels(); // connecting models

try {
  await sequelize.sync();
  app.listen(port);
  console.log("connection successful");
} catch (err) {
  console.log("db connection failed ", err);
}

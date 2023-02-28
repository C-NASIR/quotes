import sequelize from "../util/database.js";
import session from "express-session";
import connectSession from "connect-session-sequelize";

const SequelizeStore = connectSession(session.Store);
const store = new SequelizeStore({ db: sequelize });

const config = {
  secret: process.env.KEYBOARD_CAT,
  resave: false,
  saveUninitialized: false,
  store: store,
};

export default session(config);

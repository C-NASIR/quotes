import { DataTypes } from "sequelize";
import sequelize from "../util/database.js";

const Post = sequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  body: { type: DataTypes.TEXT, allowNull: false },
});

export default Post;

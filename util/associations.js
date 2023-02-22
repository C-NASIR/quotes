import User from "../models/user.js";
import Post from "../models/post.js";

export function connectModels() {
  User.hasMany(Post);
  Post.belongsTo(User);
}

import Post from "../models/post.js";
import User from "../models/user.js";

export async function getHomeView(req, res) {
  try {
    const posts = await Post.findAll();
    res.render("home", { title: "home page", posts: posts });
  } catch (err) {
    console.log(err);
  }
}

export function getAddProductView(req, res) {
  console.log("here is the user ", req.user.id);
  res.render("add-post", { userId: req.user.id });
}

export const addPost = async (req, res) => {};

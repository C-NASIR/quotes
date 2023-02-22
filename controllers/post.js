import Post from "../models/post.js";

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

export const addPost = async (req, res) => {
  try {
    const post = await Post.create({ body: req.body.post });
    req.user.addPost(post);
    await req.user.save();
    res.redirect("/");
  } catch (err) {
    console.log("can't add a post ", err);
    res.redirect("/");
  }
};

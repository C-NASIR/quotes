import { Router } from "express";
import { addPost, getAddProductView } from "../controllers/post.js";

const router = new Router();

router.get("/add-post", getAddProductView);
router.post("/add-post", addPost);

export default router;

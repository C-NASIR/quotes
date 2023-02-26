import { Router } from "express";
import { getHomeView } from "../controllers/post.js";
import { getLogin, getSignup } from "../controllers/user.js";

const router = new Router();

router.get("/", getHomeView);
router.get("/login", getLogin);
router.get("/signup", getSignup);

export default router;

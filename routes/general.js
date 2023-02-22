import { Router } from "express";
import { getHomeView } from "../controllers/post.js";

const router = new Router();

router.get("/", getHomeView);

export default router;

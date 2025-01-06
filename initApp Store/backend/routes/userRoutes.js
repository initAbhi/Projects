import express from "express";
// import { createUser } from "../controllers/userController";
import { createUser, loginUser } from "../controllers/userController.js";
const router = express.Router();

router.route("/").post(createUser);
router.post("/auth", loginUser);

export default router;

import express from "express";
// import { createUser } from "../controllers/userController";
import { createUser, loginUser,logoutUser } from "../controllers/userController.js";
const router = express.Router();

router.route("/").post(createUser);
router.route("/auth").post(loginUser);
router.route("/logout").post(logoutUser)

export default router;

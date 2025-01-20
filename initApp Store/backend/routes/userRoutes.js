import express from "express";
// import { createUser } from "../controllers/userController";
import { createUser, loginUser,logoutUser, getAllUsers,getUserProfile } from "../controllers/userController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(createUser).get(authenticate, authorizeAdmin, getAllUsers);
router.route("/auth").post(loginUser);
router.route("/logout").post(logoutUser)
router.route("/profile").get(authenticate, getUserProfile)

export default router;

import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcryptjs";
import createToken from "../utils/createToken.js";

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    throw new Error("Bro what the heck are you doing, Fill all the inputs");
  }
  let userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).send("user already exists");
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
      await newUser.save();
      createToken(res, newUser._id);
      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
      });
    } catch (error) {
      res.status(400);
      throw new Error("invalid user data :", error);
    }
    // res.send("Done");
  }
  // res.send("Done");
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error("Please fill all the inputs");
  }
  ``;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400).send("Invalid email or password");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(400).send("Invalid email or password");
  }
  createToken(res, user._id);
  res.status(200).json({
    _id: user._id,
    username: user.username,
    email: user.email,
    isAdmin: user.isAdmin,
  });
  return;
});

const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("jwt");
  res.status(200).json({ message: "Logout sucessfully" });
});

const getAllUsers = asyncHandler(async (req, res) => {
  
})

export { createUser, loginUser, logoutUser };

import User from '../models/userModel.js';
import asyncHandler from '../middlewares/asyncHandler.js';

const createUser = asyncHandler((req, res) => {
    console.log(req.body.username);
    console.log(req.body.email);
    console.log(req.body.password);
    res.send("Done");
})

export {createUser};
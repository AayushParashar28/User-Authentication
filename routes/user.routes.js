const express = require("express");

const userController = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.get("/user/test", userController.test)
userRouter.post("/user/signup", userController.signup)

module.exports = userRouter;
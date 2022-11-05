const express = require("express");

const studentController = require("../controllers/student.controller");
const studentRouter = express.Router();

studentRouter.get("/student/test", studentController.test)

studentRouter.post("/student/signup", studentController.signup)

studentRouter.get("/student/getAllStudent", studentController.getAllStudent)

module.exports = studentRouter;
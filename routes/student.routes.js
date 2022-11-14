const express = require("express");

const studentController = require("../controllers/student.controller");
const studentRouter = express.Router();

studentRouter.get("/student/test", studentController.test)

studentRouter.post("/student/signup", studentController.signup)

studentRouter.get("/student/getAllStudent", studentController.getAllStudent)

studentRouter.post("/student/signin", studentController.signin)

studentRouter.put("/admin/updatestudent/:id",studentController.updateStudentbyAdmin)

studentRouter.delete("/admin/deleteById/:id",studentController.deleteById)

module.exports = studentRouter;
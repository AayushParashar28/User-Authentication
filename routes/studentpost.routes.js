const express = require("express");

const studentpostController = require("../controllers/studentpost.controller");
const studentPostRouter = express.Router();

studentPostRouter.get("/studentpost/test",studentpostController.test);

studentPostRouter.post("/studentpost/uploadpost",studentpostController.upload);

module.exports = studentPostRouter;
const express = require("express");
const db = require("./models/index");
const studentRouter = require("./routes/student.routes");
const userRouter = require("./routes/user.routes")
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(studentRouter);
app.use(userRouter);



//connect to db
db.sequelize.sync();



const PORT = process.env.SERVER_PORT;
app.listen(PORT, (req, res)=>{
    console.log(`server started at ${PORT}`);
})
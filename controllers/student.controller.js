const db = require("../models/index.js");

exports.test = async (req,res)=>{

    try {
        
        return res.status(200).json({
            "msg":"this is student test api"
        })

    } catch (error) {
        
        console.log(error);
        return res.status(500).json({
            "msg":"internal server error"
        })
    }
}


exports.signup = async(req,res) =>{


    try {
        
        const student = {
            email : req.body.email,
            password:req.body.password,
            name:req.body.name
        }

        const result = await db.student.create(student);

        return res.status(201).json({
            "result":result
        })


    } catch (error) {
        
        console.log(error);
        return res.status(500).json({
            "msg":"internal server error"
        })

    }
}

exports.getAllStudent = async(req,res) =>{

    try {

        const students = await db.student.findAll();

        const studentCount = await db.student.count();

        return res.status(200).json({
            "result":students,
            "total_no_of_student":studentCount
        })

        
    } catch (error) {
        
        console.log(error);
        return res.status(500).json({
            "msg":"internal server error"
        })
    }
}
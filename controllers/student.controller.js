const { student } = require("../models/index.js");
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
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            gender:req.body.gender
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
        
        return res.status(500).json({
            "msg":"internal server error"
        })
    }
}

exports.signin = async (req, res) => {
    try{
        const checkemail = await db.student.findOne({
            where : {
                      email : req.body.email 
                    }   
         });
    //  console.log("printing " , checkemail.dataValues.password);
        if(checkemail){
            if(checkemail.dataValues.password==req.body.password){
                return res.status(201).json({
                    "result": "Login Successfull"
                 })
            }else{
                return res.status(201).json({
                    "msg":"password is incorrect"
                 })
            }   
         }else{
            return res.status(409).json({
                "msg":"Invalid User"
            })
         }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            "msg":"internal server error"
        }) 

    }

    
}

exports.updateStudentbyAdmin = async (req , res) =>{
    console.log(req.params.id);      
        try {
            
            const Student = await db.student.update(req.body,{
                where:{id:req.params.id} 
            })              
            console.log(Student);
            res.status(200).json({
                "result": "User Updated"
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                    "msg":"User not accepted"
            })
        }
}

exports.deleteById = async (req, res) => {
         try {
            const Student = await db.student.destroy({
                where:{id:req.params.id},
            }) 
            res.status(200).json({
                "msg":"Student Deleted"
            })
         } catch (error) {
            console.log(error);
            res.status(500).json({
                    "msg":"Internal server error"
            })
         }    
    
}    
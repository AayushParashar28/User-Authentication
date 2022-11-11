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
<<<<<<< HEAD
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
=======
    try {

        // /**
        //  1. check email present in db or no. if present then only check for password.

        //  */
        const result = await db.student.findAll({

                    where: { 
                        email:req.body.email,
                        password:req.body.password
                    }

                });

        
                // check if result[] length == 1 then login status = success/
        return res.status(201).json({

          "result":"you have been successfully logged in"

        })


    } catch (error) {

>>>>>>> e34880496dd83ce55a0376ee2483f058d45a9d40
        return res.status(500).json({
            "msg":"internal server error"
        }) 

    }

    
}

exports.totalentry = async (req , res) =>{
    try {
        const getlist = await db.student.findAll();
        const listcount = await db.student.count();

        return res.status(200).json({
            "Entries":getlist,
            "total_no_of_entry":listcount
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            "msg":"You are not Admin"
        }) 
    }
}


exports.updateStudentbyAdmin = async (req , res) =>{
    console.log(req.params.id);      
        try {
            const Student = await db.student.update({
                where : { 
                           id : req.params.id 
                        },
                     
                    email : req.body.email,
                    password:req.body.password,
                    firstname:req.body.firstname,
                    lastname:req.body.lastname,
                    gender:req.body.gender
                })
                                 
            console.log(Student);
            res.status(200).json({
                "result":Student
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                    "msg":"Internal server error"
            })
        }
}

exports.deleteById = async (request, response) => {
         try {
            
         } catch (error) {
            console.log(error);
            res.status(500).json({
                    "msg":"Internal server error"
            })
         }    
    
}    
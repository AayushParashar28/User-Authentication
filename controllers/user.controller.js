const db = require("../models/index.js");

exports.test = async (req,res)=>{

    try {
        
        return res.status(200).json({
            "msg":"this is user test api"
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
        const user= {
            userid: req.body.userid,
            firstname:req.body.firstname,
            lastname :req.body.lastname,
            age:req.body.age,
            address: req.body.address
        }

        const result = await db.user.create(user);

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
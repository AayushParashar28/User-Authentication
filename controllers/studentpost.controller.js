const db = require("../models/index.js");

exports.test = async (req, res) => {
    try {
        res.status(200).json({
            "msg": "Your test api runs sucessfully"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            "msg": "invalid api"
        })
    }
}

exports.upload = async (req, res) => {
    try {
        const uploadpost = {
            post: req.body.post
        }
        const Studentpost = await db.student.create(uploadpost);
        res.status(200).json({
            "post": Studentpost
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "msg": "invalid api"
        })
    }
}
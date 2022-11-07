const {DataTypes } = require("sequelize");

module.exports = (sequelize , Sequelize) => {

    const Student = sequelize.define("student",{

        email:{
            type:DataTypes.STRING,
            unique:true // no two users should have same email id.
        },
        password:{
            type:DataTypes.STRING
        },
        firstname:{
            type:DataTypes.STRING
        },
        lastname:{
            type:DataTypes.STRING
        },
        gender:{
            type:DataTypes.STRING
        }

    })

    return Student;
}

// this was big problem. Migration files.

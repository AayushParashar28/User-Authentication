const {DataTypes } = require("sequelize");

module.exports = (sequelize , Sequelize) => {

    const Student = sequelize.define("student",{

        email:{
            type:DataTypes.STRING,
            unique:true 
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
//admin user -- power - kissi bhi student detail ko change kr skta hai
// callback 
// promises
//async
// prototypes
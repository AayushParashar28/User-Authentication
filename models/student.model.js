const {DataTypes } = require("sequelize");

module.exports = (sequelize , Sequelize) => {

    const Student = sequelize.define("student",{

        email:{
            type:DataTypes.STRING,
<<<<<<< HEAD
            unique:true 
=======
            unique:true // no two users should have same email id.
>>>>>>> e34880496dd83ce55a0376ee2483f058d45a9d40
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
<<<<<<< HEAD
//admin user -- power - kissi bhi student detail ko change kr skta hai
// callback 
// promises
//async
// prototypes
=======

// this was big problem. Migration files.
>>>>>>> e34880496dd83ce55a0376ee2483f058d45a9d40

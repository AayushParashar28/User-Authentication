const {DataTypes } = require("sequelize");

module.exports = (sequelize , Sequelize) => {

    const Student = sequelize.define("student",{

        email:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        },
        name:{
            type:DataTypes.STRING
        }


    })

    return Student;
}
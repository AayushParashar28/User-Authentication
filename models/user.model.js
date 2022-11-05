const {DataTypes } = require("sequelize");

module.exports = (sequelize , Sequelize) => {

    const User = sequelize.define("user",{

        userid:{
            type:DataTypes.STRING,
            defaultValue:null
        },
        firstname:{
            type:DataTypes.STRING
        },
        lastname:{
            type:DataTypes.STRING
        },
        age:{
            type:DataTypes.INTEGER
        },
        address:{
            type:DataTypes.STRING
        }
    })

    return User;
}
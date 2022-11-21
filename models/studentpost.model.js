const {DataTypes } = require("sequelize");

module.exports = (sequelize , Sequelize) => {

    const Studentupload = sequelize.define("studentpost",{
        
        post:{
            type:DataTypes.STRING(20000)
        }

    })

    return Studentupload;
}
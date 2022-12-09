const config = require("../config/db.config.js")[process.env.NODE_ENV];


const seq = require("sequelize");
const {Sequelize, DataTypes} = seq;


const sequelize = new Sequelize(config.database, config.username, config.password ,{
    host:config.host,
    port:config.port,
    dialect:config.dialect,
    operatorsAliases:0
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.student = require("./student.model")(sequelize,Sequelize);
db.studentpost = require("./studentpost.model")(sequelize,Sequelize);

db.student.hasOne(db.studentpost,{
    foreignKey:"StudentId",
    as:"studentpost"
});


module.exports = db;
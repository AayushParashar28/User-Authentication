require('dotenv').config();
module.exports = {

    development:{
        username:process.env.DB_USERNAME,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_SCHEMA,
        host:process.env.DB_HOST,
        port:process.env.DB_PORT,
        dialect:'postgres',
        logging:true
    },
    test:{
        username:process.env.DB_USERNAME,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_SCHEMA,
        host:process.env.DB_HOST,
        port:process.env.DB_PORT,

        dialect:'postgres',
        logging:true
    },
    production:{

        username:process.env.DB_USERNAME,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_SCHEMA,
        host:process.env.DB_HOST,
        port:process.env.DB_PORT,

        dialect:'postgres',
        logging:true
  
    }
}
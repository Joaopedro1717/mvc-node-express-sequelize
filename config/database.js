//config/database.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('aplicacao_1','root','123456',{
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate();

module.exports=sequelize;
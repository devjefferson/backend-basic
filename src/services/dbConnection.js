const Sequelize = require('sequelize');
const {user, password, database, host, dialect } = require("../../config/database"); // database

const sequelize = new Sequelize(database, user, password,{
  host,
  dialect
})


module.exports = {sequelize, Sequelize}
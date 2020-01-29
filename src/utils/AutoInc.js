const AutoInc = require('mongoose-auto-increment')
const dbConnection = require('../services/dbConnection')
const bcrypt = require('bcryptjs')

module.exports ={
  Increment: AutoInc.initialize(dbConnection()),
  dados: (modelName, nameField)=>{
    return {model: modelName,
    field: nameField,
    startAt: 1000,
    incrementBy: 1}
  },
  Plugin: AutoInc.plugin,
  Compary: (params1, params2)=>{
    return bcrypt.compare(params1, params2)
  }
}
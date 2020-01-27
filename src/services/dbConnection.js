const mongoose = require('mongoose')

function Mongo(){
  console.log('OK')
  mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}`, {useNewUrlParser: true, useUnifiedTopology: true})
}

module.exports = ()=>{
  return Mongo()
}
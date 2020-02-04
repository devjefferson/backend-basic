const autoIncrement = require('mongoose-auto-increment')
const dbConnection = require('../services/dbConnection')
const mongoose = require('mongoose')
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const connection =`mongodb+srv://ndiesuper:ndiesuper@cluster0-bqg4o.gcp.mongodb.net/test`
module.exports ={
  auto: autoIncrement.initialize(mongoose.createConnection(connection)),
  dados: (modelName, nameField)=>{
  return {
  model: modelName,
  field: nameField,
  startAt: 1000,
  incrementBy: 1
}
},
  Plugin: autoIncrement.plugin
}
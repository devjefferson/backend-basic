const dbConnection = require('../../services/dbConnection')
const UserModel = require('../../models/User')
/*
  CRUD USER
*/
module.exports = {
  async list(req, res){
    dbConnection()
    const User = await UserModel.find()
    res.status(200).send(User)
  },
  async store(req, res){
    dbConnection()
    try {

      const User = await UserModel.create(req.body)
      await User.save().then(()=>{
        res.send("OK")
      })
   } catch (error) {
     console.log(error)
   }
  },
  async listone(req, res){
    dbConnection()
    const { name } = req.params
    const User = await UserModel.findOne({name})

    res.status(200).json(User)
  },
  async update(req, res){
    dbConnection()
    const {id} = req.params
    try {
      await UserModel.findByIdAndUpdate({_id: id}, req.body)
      res.status(201).json({Mensagem: `O Usuario Foi Alterado com sucesso`})
    } catch (error) {
      
    }
  },
  async delete(req, res){
    dbConnection()
    const {id} = req.params
    try {
      await UserModel.findByIdAndDelete({_id: id})
      res.status(201).json({Mensagem: `O Usuario Foi Deletado com sucesso`})
    } catch (error) {
      
    }
  }
}
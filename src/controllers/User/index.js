const dbConnection = require('../../services/dbConnection')
const UserModel = require('../../models/User')
const Regex = require('../../utils/Regex')

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
    res.status(400).json({message: 'Não foi possivel criar um novo Usuario'})
   }
  },
  async listone(req, res){
    dbConnection()

      try {
        const User = await UserModel.findOne(req.params)
          if(User){
            res.status(200).json(User)
          } else{
            res.status(400).json({message: 'Usuario não encotrado'})
          }
      } catch (error) {
        res.status(400).json({message: 'Usuario não encotrado'})
      }
    
    
  },
  async update(req, res){
    dbConnection()
    const {id} = req.params
    try {
      await UserModel.findByIdAndUpdate({_id: id}, req.body)
      res.status(201).json({Mensagem: `O Usuario Foi Alterado com sucesso`})
    } catch (error) {
      res.status(400).json({message: 'Não foi possivel alterar o Usuario'})
    }
  },
  async delete(req, res){
    dbConnection()
    const {id} = req.params
    try {
      await UserModel.findByIdAndDelete({_id: id})
      res.status(201).json({Mensagem: `O Usuario Foi Deletado com sucesso`})
    } catch (error) {
      res.status(400).json({message: 'Não foi possivel Deleta O usuario'})
    }
  }
}
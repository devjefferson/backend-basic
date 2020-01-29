const dbConnection = require('../../services/dbConnection')
const Produto = require('../../models/Produto')
module.exports = {
  async list(req, res, next){
    try {
      dbConnection()
    const Produtos = await Produto.find().populate({ path: 'usuario', select: 'name' })
      res.status(200).send({Produtos})
    } catch (error) {
      res.status(400).send({message: error})
    }
  },
  async store(req, res){
    dbConnection()
    try {
      const Prod = await Produto.create(req.body)
      await Prod.save()
      res.status(200).send({produto: Prod})
    } catch (error) {
      res.status(400).send({message: error})
    }
  }
}
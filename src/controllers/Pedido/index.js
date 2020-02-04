const dbConnection = require('../../services/dbConnection')
const Pedido = require('../../models/Pedido')
module.exports = {
  async list(req, res, next){
    dbConnection()
    const Peds = await Pedido.find()
          .populate({ path: 'usuario', select: ['name', 'email'] })
          .populate({ path: 'produtos.produto', select: ['name'] })
          .populate({ path: 'cliente', select: ['nome', 'email', 'end.rua', 'tel'], populate: {path: 'atendente', select: 'name'} })
      console.log(process.env.MYSQL_USER)
    res.status(200).send({
      Pedidos: Peds
    })
    
  },
  async store(req, res){
    dbConnection()
    try {
      const Ped = await Pedido.create(req.body)
      await Ped.save()
        res.status(201).send({pedido:Ped})
      

    } catch (error) {
      res.status(400).send({error: error})
    }
  }
}
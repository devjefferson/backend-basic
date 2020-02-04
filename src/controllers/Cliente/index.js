const dbConnection =require('../../services/dbConnection');
const Cliente = require('../../models/Cliente')

module.exports={
  async list(req, res){
    dbConnection()
    try {
      const Client = await Cliente.find()
          .populate({ path: 'atendente', select: ['name', 'email'] })
      res.status(200).send({Client})
    } catch (error) {
      res.status(400).send({error})
    }
  },
  async store(req, res){
    dbConnection()
    try {
      const Client = await Cliente.create(req.body)
      await Client.save()

      res.status(200).send({Client})
    } catch (error) {
      res.status(400).send({error})
    }
  }
}
const dbConnection = require('../../services/dbConnection')
module.exports = {
  async list(req, res, next){
    dbConnection()
    res.status(200).send({
      Mensagem: 'A Rota de Pedido esta Funcionando'
    })
    
  },
  async store(req, res){
    dbConnection()
    try {
      
    } catch (error) {
      
    }
  }
}
module.exports = {
  list(req, res, next){
    res.status(200).send({
      Mensagem: 'A Rota de Produto esta Funcionando'
    })
  }
}
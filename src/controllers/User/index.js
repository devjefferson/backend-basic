module.exports = {
  list(req, res, next){
    res.status(200).send({
      Mensagem: 'Rota de User esta Funcionando'
    })
  }
}
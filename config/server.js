const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const express = require('express')
const app = express()
const routes = require('../src/routes')
require("dotenv").config()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(routes)


app.use((req, res, next)=>{
  const erro = new Error('Pagina Não encontrada');
  erro.status = 404;
  next(erro);
});

app.use((error, req ,res, next)=>{
  res.status(error.status || 500);
  return res.send({
    erro:{
      mensagem: error.message
    }
  })

})
const server = http.createServer(app);

module.exports = server
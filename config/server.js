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

app.use((req, res ,next)=>{
  res.header('Access-Control-Allow-Origin', '*')

  res.header(
    'Access-Control-Allow-Header', 
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  
  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).send({})
  }
  next();
})

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
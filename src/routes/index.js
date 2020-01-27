const router = require('express').Router()
const User = require('../controllers/User')
const Produto = require('../controllers/Produto')
const Pedido = require('../controllers/Pedido')

router.get('/', User.list)
router.get('/produto', Produto.list)
router.get('/pedido', Pedido.list)

module.exports = router
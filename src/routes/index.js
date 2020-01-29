const express = require('express')
const router = express.Router()
const User = require('../controllers/User/')
const Produto = require('../controllers/Produto/')
const Pedido = require('../controllers/Pedido/')


router.get('/', User.list)
router.post('/', User.store)
//router.get('/:id', User.listone)
router.put('/:id', User.update)
router.delete('/:id', User.delete)

router.get('/produto', Produto.list)
router.post('/produto', Produto.store)


router.get('/pedido', Pedido.list)
//router.get('/pedido', Pedido.store)


module.exports = router
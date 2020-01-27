const router = require('express').Router()
const User = require('../controllers/User/')
const Produto = require('../controllers/Produto/')
const Pedido = require('../controllers/Pedido/')

router.get('/', User.list)
router.post('/', User.store)
router.get('/:name', User.listone)
router.put('/:id', User.update)
router.delete('/:id', User.delete)

router.get('/produto', Produto.list)
router.get('/pedido', Pedido.list)

module.exports = router
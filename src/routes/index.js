const express = require('express')
const router = express.Router()
const User = require('../controllers/User/')
const Auth = require('../controllers/Auth/')
const authMiddleware = require('../middleware/auth')
/*
const Produto = require('../controllers/Produto/')
const Pedido = require('../controllers/Pedido/')
const Cliente = require('../controllers/Cliente/')

*/
router.get('/', User.list)
router.post('/', User.store)
router.get('/:id', User.listone)
router.put('/:id', User.update)
router.delete('/:id', User.delete)

/*
router.use(authMiddleware);
router.post('/login', Auth.login)
router.get('/produto', Produto.list)
router.post('/produto', Produto.store)


router.get('/pedido', Pedido.list)
router.post('/pedido', Pedido.store)

router.get('/cliente', Cliente.list)
router.post('/cliente', Cliente.store)



*/
module.exports = router
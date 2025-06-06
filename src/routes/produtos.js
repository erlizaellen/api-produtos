const express = require ('express')
const router = express.Router()
const produtosController= require('../controllers/produtos')
const authMiddleware = require('../middlewares/auth')
//importar middleware
const produtosMiddleware = require ('../middlewares/produtos')



router.get(
    '/produtos',
    authMiddleware.validateToken,
    produtosController.getProdutos)

//middleware tem que estar no meio ,senao vai criar produto antes de validar
router.post('/produtos' ,
    produtosMiddleware.validateCreateProduto, 
    produtosController.createProduto)

module.exports = router;
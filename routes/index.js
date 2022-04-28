const customFieldRouter = require('./custom-fields')
const customerRouter = require('./customers')
const orderRouter = require('./orders')
const productRouter = require('./products')

const router = require('express').Router()

router.use(customFieldRouter)
router.use(customerRouter)
router.use(orderRouter)
router.use(productRouter)

module.exports = router
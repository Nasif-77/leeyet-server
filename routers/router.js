const express = require('express')
const { upload } = require('../helpers/multer_helper')
const { getProducts, addProducts, updateProduct, getProduct, deleteProduct } = require('../controller/products')
const router = express.Router()

router.route('/products')
    .get(getProducts)
    .post(upload.array('files'), addProducts)

router.route('/products/:id')
    .get(getProduct)
    .put(upload.array('files'), updateProduct)
    .delete(deleteProduct)

module.exports = router
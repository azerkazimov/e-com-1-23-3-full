const express = require('express');
const router = express.Router();

const { getProductsHandler, postProductHandler, patchProductHandler, deleteProductHandler, getProductByIdHandler } = require('../controllers/product.controller');

router.route('/').get(getProductsHandler).post(postProductHandler);
router.route('/:id').get(getProductByIdHandler).patch(patchProductHandler).delete(deleteProductHandler);

module.exports = router;
var express = require('express');
var router = express.Router();
const {getProduct, getOneProduct, postProduct, putProduct, deleteProduct} = require('../controllers/productsController');

/* GET users listing. */
router.get('/', getProduct);
router.get('/:id', getOneProduct);
router.post('/', postProduct);
router.put('/:id', putProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
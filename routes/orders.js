var express = require('express');
var router = express.Router();
const {getOrder, getOneOrder, postOrder, putOrder, deleteOrder} = require('../controllers/ordersController');

/* GET users listing. */
router.get('/', getOrder);
router.get('/:id', getOneOrder);
router.post('/', postOrder);
router.put('/:id', putOrder);
router.delete('/:id', deleteOrder);


module.exports = router;

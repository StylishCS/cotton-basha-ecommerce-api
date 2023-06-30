var express = require('express');
var router = express.Router();
const {getOffer,getOneOffer, postOffer, putOffer, deleteOffer} = require('../controllers/offersController');

/* GET users listing. */
router.get('/', getOffer);
router.get('/:id', getOneOffer);
router.post('/', postOffer);
router.put('/:id', putOffer);
router.delete('/:id', deleteOffer);

module.exports = router;

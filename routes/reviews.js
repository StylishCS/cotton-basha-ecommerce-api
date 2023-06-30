var express = require('express');
var router = express.Router();
const {getReview, getOneReview, postReview, putReview, deleteReview} = require('../controllers/reviewsController');

/* GET users listing. */
router.get('/', getReview);
router.get('/:id', getOneReview);
router.post('/', postReview);
router.put('/:id', putReview);
router.delete('/:id', deleteReview);

module.exports = router;

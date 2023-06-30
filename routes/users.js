var express = require('express');
var router = express.Router();
const {getUser, getOneUser, postUser, putUser, deleteUser} = require('../controllers/usersController');

/* GET users listing. */
router.get('/', getUser);
router.get('/:id', getOneUser);
router.post('/', postUser);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);

module.exports = router;

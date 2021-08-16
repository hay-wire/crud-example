var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');

router.get('/', userController.get);
router.post('/', userController.create)
router.put('/', userController.update);
router.delete('/', userController.delete);

module.exports = router;

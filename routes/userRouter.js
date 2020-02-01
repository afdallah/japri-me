const express = require('express');
const router = express.Router();

const user = require('../controllers/userController');
const isAuthenticated = require('../middleware/authenticate');

router.post('/', user.create);
router.post('/login', user.login);
router.get('/', isAuthenticated, user.getAll);
router.put('/:id', isAuthenticated, user.update)
router.delete('/:id', isAuthenticated, user.delete);

module.exports = router;
const { registerAuth } = require('../../controllers/auth/auth');

const router = require('express').Router();
router.post('/register', registerAuth)

module.exports = router
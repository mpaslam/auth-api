const getUser = require('../../controllers/user/getuser');

const router = require('express').Router();
router.get('/getUser', getUser);

module.exports = router
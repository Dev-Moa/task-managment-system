const express = require('express')
const router = express.Router()

//controllers
const { registerUser,loginUser, getUser } = require('../controllers/auth')
const validateToken = require('../middlewares/validateToken')

//routes
router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/:id',getUser)


module.exports = router;

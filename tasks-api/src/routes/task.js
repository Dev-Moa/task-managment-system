const express = require('express')
const router = express.Router()
const validateToken = require('../middlewares/validateToken')
//controllers
const { createtask,getTasks,getTask, updateTask, deleteTask } = require('../controllers/task')

//routes
router.use(validateToken)
router.post('/',createtask)
router.get('/',getTasks)
router.put('/:id',updateTask)
router.delete('/:id',deleteTask)


module.exports = router;

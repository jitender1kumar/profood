const router = require("express")
  .Router()
const controller = require('../controller/categorycontroller')

  
router
  .post('/', controller.createTask)
  .get('/', controller.getTasks)
  .delete('/:_id',controller.deleteTasks)
  .put('/',controller.updateTasks)
module.exports = router
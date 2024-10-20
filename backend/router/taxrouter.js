const taxouter = require("express")
  .Router()
const taxcontroller = require('../controller/taxcontroller')
taxouter
  .post('/', taxcontroller.createtaxTask)
  .get('/', taxcontroller.gettaxTask)
  .get('/:_id', taxcontroller.gettaxbyidTasks)
  
  .delete('/:_id',taxcontroller.deletetaxTasks)
  .put('/',taxcontroller.updatetax)
module.exports = taxouter
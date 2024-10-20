const pprouter = require("express")
  .Router()
const ppcontroller = require('../controller/ppcontroller')
pprouter
  .post('/', ppcontroller.createppTask)
  .get('/', ppcontroller.getppTask)
  .get('/:selectcategoryID', ppcontroller.getppbyidTasks)
 
  .get('/:SelectProductId/:selectBaseTypeID/:selectQtypeID/:selectcategoryID', ppcontroller.getppbyidTasks2)
  .delete('/:_id',ppcontroller.deleteppTasks)
  .put('/',ppcontroller.updatepp)
module.exports = pprouter

///:selectcategoryID/:selectQtypeID
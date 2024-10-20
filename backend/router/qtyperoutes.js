const qtyperouter = require("express")
  .Router()
const Qtypecontroller = require('../controller/QtypeController')
qtyperouter
  .post('/', Qtypecontroller.createQtypeTask)
  .get('/', Qtypecontroller.getQtypeTasks)
  .delete('/:_id',Qtypecontroller.deleteQtypeTasks)
  .put('/',Qtypecontroller.updateQtype)
module.exports = qtyperouter
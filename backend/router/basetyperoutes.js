const basetypeouter = require("express")
  .Router()
const basetypecontroller = require('../controller/basetypecontroller')
basetypeouter
  .post('/', basetypecontroller.createbasetypeTask)
  .get('/', basetypecontroller.getbasetypeTask)
  .get('/:selectcategoryID', basetypecontroller.getbasetypebyidTasks)

  .delete('/:_id',basetypecontroller.deletebasetypeTasks)
  .put('/',basetypecontroller.updateBT)
module.exports = basetypeouter
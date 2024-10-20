const itemsrouter = require("express")
  .Router()
const itemscontroller = require('../controller/itemcontroller')
itemsrouter
  .post('/', itemscontroller.createitemsTask)
  .get('/', itemscontroller.getitemTask)
  .get('/:RecieptNumber', itemscontroller.getiitembyidTasks)
  
module.exports = itemsrouter
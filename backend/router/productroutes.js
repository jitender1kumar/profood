const productouter = require("express")
  .Router()
const productscontroller = require('../controller/productcontroller')
productouter
  .post('/', productscontroller.createproductTask)
  .get('/', productscontroller.getproductTask)
  //.get('/:selectcategoryID', productscontroller.getproductbyidTasks)
  .get('/:_id', productscontroller.getproductbyidTasks2)
  .delete('/:_id',productscontroller.deleteproductTasks)
  .put('/',productscontroller.updateproduct)
module.exports = productouter
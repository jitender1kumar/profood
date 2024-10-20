const invoiceouter = require("express")
  .Router()
const invoicecontroller = require('../controller/invoicecontroller')
invoiceouter
  .post('/', invoicecontroller.createinvoiceTask)
  .get('/', invoicecontroller.getinvoiceTask)
  .get('/:RecieptNumber', invoicecontroller.getinvoicebyidTasks)
  
module.exports = invoiceouter
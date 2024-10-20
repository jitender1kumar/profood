const {
    Schema,
    model,
    mongo
  } =require("mongoose");
  
  const Invoice = new Schema({

      Taxes:
      {
        type: Object,
        required: true,
      },
      DiscountId: {
        type: String,
        required: true,
        maxlength: 50
      }, Discountvalue: {
        type: Number,
        required: true,
        maxlength: 50
      }, Discountperstage: {
        type: Number,
        required: true,
        maxlength: 50
      },AdditionaldiscountAmount: {
        type: Number,
        required: true,
        maxlength: 50
      },Totalvaue: {
        type: Number,
        required: true,
        maxlength: 50
      },grandtotal: {
        type: Number,
        required: true,
        maxlength: 50
      },RecieptNumber: {
        type: Number,
        required: true,
        maxlength: 50
      },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  const TaskInvoice = model("Invoice", Invoice)
  
  module.exports = TaskInvoice 
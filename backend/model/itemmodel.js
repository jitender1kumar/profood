const {
    Schema,
    model,
    mongo
  } =require("mongoose");
  
  const Items = new Schema({
    Productid: {
      type: String,
      required: true,
      maxlength: 100
    },
    Productname: {
      type: String,
      required: true,
      maxlength: 300
    },
    basetypeid: {
      type: String,
      required: true,
      maxlength: 100
    },
    basetypename: {
        type: String,
        required: true,
        maxlength: 300
      },
      Invoiceid: {
        type: String,
        required: true,
        maxlength: 100
      },
    Qauntityid: {
      type: String,
      required: true,
      maxlength: 100
    },
    Qauntityname: {
        type: String,
        required: true,
        maxlength: 300
      },
      Quantity: {
        type: Number,
        required: true,
        maxlength: 50
      },itemamount: {
        type: Number,
        required: true,
        maxlength: 50
      },
      totalquantityamount: {
        type: Number,
        required: true,
        maxlength: 50
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    });
  
    const TaskItems = model("Items", Items)
    
    module.exports = TaskItems
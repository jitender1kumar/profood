const {
    Schema,
    model,
    mongo
  } = require("mongoose");
  
  
  const quantitytype = new Schema({
    name: {
      type: String,
      required: true,
      maxlength: 50
    },
    Desc: {
      type: String,
      required: true,
      maxlength: 300
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  const Taskquantitytype = model("quantitytype", quantitytype)
  
  module.exports = Taskquantitytype 
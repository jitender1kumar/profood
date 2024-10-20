const {
    Schema,
    model,
    mongo
  } = require("mongoose");
  
  
  const Tax = new Schema({
    name: {
      type: String,
      required: true,
      maxlength: 50
    },
    Description: {
      type: String,
      required: true,
      maxlength: 300
    },
    perscentRate: {
        type: Number,
        required: true,
        maxlength: 50
      },Status: {
        type: Boolean,
        required: true,
        maxlength: 50
      },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  const TaskTax = model("Tax", Tax)
  
  module.exports = TaskTax 
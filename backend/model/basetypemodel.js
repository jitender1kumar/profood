const {
    Schema,
    model,
    mongo
  } = require("mongoose");
  
  
  const basetype = new Schema({
    Basetypename: {
      type: String,
      required: true,
      maxlength: 50
    },
    Basetypedesc: {
      type: String,
      required: true,
      maxlength: 300
    },
    selectcategoryID: {
        type: String,
        required: true,
        maxlength: 50
      },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  const Taskbasetype = model("basetype", basetype)
  
  module.exports = Taskbasetype 
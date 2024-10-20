const {
    Schema,
    model,
    mongo
  } = require("mongoose");
  
  const Products = new Schema({
    Productname: {
      type: String,
      required: true,
      maxlength: 50
    },
    Productdesc: {
      type: String,
      required: true,
      maxlength: 300
    },
    selectcategoryID: {
        type: String,
        required: true,
        maxlength: 50
      },
      selectQtypeID: {
        type: String,
        required: true,
        maxlength: 50
      },
      selectBaseTypeID: {
        type: String,
        required: true,
        maxlength: 50
      },availablity: {
        type: Boolean,
        required: true,
      },veg_nonveg: {
        type: Boolean,
        required: true,
      },Status: {
        type: Boolean,
        required: true,
      }, 
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  const TaskProduct = model("Products", Products)
  
  module.exports = TaskProduct 
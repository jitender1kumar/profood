const {
    Schema,
    model,
    mongo
  } = require("mongoose");
  
  const ProductPrice = new Schema({
    ProductPrice: {
      type: String,
      required: true,
      maxlength: 50
    },
    SelectProductId: {
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
      },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  const TaskPP = model("ProductPrice", ProductPrice)
  
  module.exports = TaskPP 
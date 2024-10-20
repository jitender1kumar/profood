const {
    Schema,
    model,
    mongo
  } = require("mongoose");
  
  const MySchema = new Schema({
    name: {
      type: String,
      required: true,
      maxlength: 50
    },
    description:
    {
      type: String,
      required: true,
      maxlength: 300
    },
    status:
    {
      type: Boolean,
      required: true,
      maxlength: 300
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  });
  
  
  const TaskModel = model("dine", MySchema)
  module.exports = TaskModel //| categoryTask
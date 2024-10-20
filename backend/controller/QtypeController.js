
const QtypeModelTask = require('../model/QtypeModel');

  
  exports.createQtypeTask = async (req, res) => {

    try {
      // get the task from the body
      const taskData = await req.body;
      //create a new task then save
      await QtypeModelTask.create(taskData)
        .then((createdTask) => {
          if (!createdTask) return res.status(404)
            .json({
              success: false,
              message: "Task creation failed",
              error: "Unable get created task"
            })
          res.status(201)
            .json({
              success: true,
              createdTask
            })
        })
        .catch((error) => {
          res.status(404)
            .json({
              success: false,
              error: error.message
            })
        })
    } catch (error) {
      res.status(500)
        .json({
          success: false,
          message: "Internal server error"
        })
    }
  }
  exports.getQtypeTasks = async (req, res) => {
    //get all the data in the model and return it as response
    try {
      QtypeModelTask.find()
        .then((allTasks) => {
          res.status(200)
            .json({
              success: true,
              allTasks
            })
        })
        .catch((error) => {
          res.status(404)
            .json({
              success: false,
              message: "Cant fined ",
              error
            })
        })
    } catch (error) {
      res.status(500)
        .json({
          success: false,
          message: "Internal server error",
          error: error.message
        })
    }
  }
  exports.deleteQtypeTasks = async (req, res) => {
    //get all the data in the model and return it as response
    try {
      const result = await QtypeModelTask.deleteOne({ _id: req.params });
     
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }  
  }


  exports.updateQtype = async (req, res) => {
    
    try {
      
      const taskData = await req.body;
      const { _id } = taskData.quantitytype;
      console.log(taskData.quantitytype);
      // Ensure that id and updateData are provided
      if (!_id || !taskData) {
        return res.status(400).json({
          success: false,
          message: "Missing id or update data"
        });
      }
    
      // Perform the update operation
      const result = await QtypeModelTask.updateOne({ _id: _id }, taskData.quantitytype);
    
      if (result.nModified === 0) {
        return res.status(404).json({
          success: false,
          message: "Document not found or no changes made"
        });
      }
    
      res.status(200).json({
        success: true,
        message: "Document updated successfully",
        result
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message
      });
    }
  }
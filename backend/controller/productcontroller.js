
const productmodelTask = require('../model/productmodel');

  
  exports.createproductTask = async (req, res) => {

    try {
      // get the task from the body
      const taskData = await req.body;
      //create a new task then save
      await productmodelTask.create(taskData)
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
  exports.getproductTask = async (req, res) => {
    //get all the data in the model and return it as response
    try {
        productmodelTask.find()
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

  exports.deleteproductTasks = async (req, res) => {
   // console.log(req.params);
   
    try {
      const result = await productmodelTask.deleteOne({ _id: req.params });
     
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }  
  }

  exports.getproductbyidTasks = async (req, res) => {
    try {
        productmodelTask.find(req.params)
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
   exports.getproductbyidTasks2 = async (req, res) => {
    try {
        productmodelTask.find(req.params)
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
  exports.updateproduct = async (req, res) => {
    
    try {
      
      const taskData = await req.body;
      const { _id } = taskData.product;
      // Ensure that id and updateData are provided
      if (!_id || !taskData) {
        return res.status(400).json({
          success: false,
          message: "Missing id or update data"
        });
      }
    
      // Perform the update operation
      const result = await productmodelTask.updateOne({ _id: _id }, taskData.product);
    
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
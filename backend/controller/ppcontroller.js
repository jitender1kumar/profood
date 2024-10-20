
const ppmodelTask = require('../model/ppmodel');

  
  exports.createppTask = async (req, res) => {

    try {
      // get the task from the body
      const taskData = await req.body;
      //create a new task then save
      await ppmodelTask.create(taskData)
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
 // ppmodelTask.findOne(req.param)
  exports.getppbyidTasks2 = async (req, res) => {
    try {
      const { selectBaseTypeID,SelectProductId,selectcategoryID,selectQtypeID } = req.params;
        ppmodelTask.findOne({
          $and: [
              {SelectProductId: SelectProductId  }, // Ensure id is a valid ObjectId
              {selectcategoryID: selectcategoryID  },
              {selectQtypeID: selectQtypeID  },
              {selectBaseTypeID: selectBaseTypeID}
          ]})
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

  exports.getppTask = async (req, res) => {
    //get all the data in the model and return it as response
    try {
        ppmodelTask.find()
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

  exports.deleteppTasks = async (req, res) => {
   // console.log(req.params);
   
    try {
      const result = await ppmodelTask.deleteOne({ _id: req.params });
     
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }  
  }

  exports.getppbyidTasks = async (req, res) => {
    try {
        ppmodelTask.find(req.params)
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

  exports.updatepp = async (req, res) => {
    
    try {
     
      const taskData = await req.body;
      const { _id } = taskData.productprice;
     // console.log(taskData.productprice);
      // Ensure that id and updateData are provided
      if (!_id || !taskData) {
        return res.status(400).json({
          success: false,
          message: "Missing id or update data"
        });
      }
    
      // Perform the update operation
      const result = await ppmodelTask.updateOne({ _id: _id }, taskData.productprice);
    
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
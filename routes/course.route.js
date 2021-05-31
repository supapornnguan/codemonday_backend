module.exports = app => {
    const course = require("../controller/course.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", course.create);
  
    // Retrieve all Tutorials
    router.get("/", course.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", course.delete);
  
    // // Create a new Tutorial
    // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/course', router);
  };
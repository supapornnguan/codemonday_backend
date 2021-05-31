module.exports = app => {
  const teacher = require("../controller/teacher.controllers");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", teacher.create);

  // Retrieve all Tutorials
  router.get("/", teacher.findAll);

  // // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);

  // // Retrieve a single Tutorial with id
  // router.get("/:id", tutorials.findOne);

  // // Update a Tutorial with id
  // router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", teacher.delete);

  // // Create a new Tutorial
  // router.delete("/", tutorials.deleteAll);

  app.use('/api/teacher', router);
};
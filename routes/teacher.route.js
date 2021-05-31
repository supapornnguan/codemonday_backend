module.exports = app => {
  const teacher = require("../controller/teacher.controllers");

  var router = require("express").Router();

  router.post("/", teacher.create);

  router.get("/", teacher.findAll);

  router.delete("/:id", teacher.delete);

  app.use('/api/teacher', router);
};
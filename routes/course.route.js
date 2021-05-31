module.exports = app => {
    const course = require("../controller/course.controller");
  
    var router = require("express").Router();
  
    router.post("/", course.create);

    router.get("/", course.findAll);
  
    router.delete("/:id", course.delete);
  
    app.use('/api/course', router);
  };
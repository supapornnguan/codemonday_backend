const db = require("../models");
const Course = db.Course;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {

    if (!req.body.course_name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    const course = {
      course_name: req.body.course_name,
      course_description: req.body.course_description,
      teacher_id: req.body.teacher_id
    };
  

    Course.create(course)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Course."
        });
      });
  };

exports.findAll = (req, res) => {
    Course.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Course."
        });
      });
  };



exports.delete = (req, res) => {
    const id = req.params.id;

    Course.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Course was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Course with id=${id}. Maybe Course was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Course with id=" + id
        });
      });
  };

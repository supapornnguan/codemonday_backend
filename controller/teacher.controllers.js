const db = require("../models");
const Teacher = db.Teacher;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    // Validate request
    if (!req.body.first_name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  

    const teacher = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      date_of_birth : req.body.date_of_birth,
      major : req.body.major
    };
  

    Teacher.create(teacher)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Teacher."
        });
      });
  };

exports.findAll = (req, res) => {
    Teacher.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving teacher."
        });
      });
  };

exports.delete = (req, res) => {
    const id = req.params.id;
  
    Teacher.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Teacher was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Teacher with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Teacher with id=" + id
        });
      });
  };

const db = require("../models");
const Teacher = db.Teacher;
const Op = db.Sequelize.Op;

// Create and Save a new Teacher
exports.create = (req, res) => {
    // Validate request
    if (!req.body.first_name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const teacher = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      date_of_birth : req.body.date_of_birth,
      major : req.body.major
    };
  
    // Save Tutorial in the database
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
// Retrieve all Tutorials from the database.
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

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
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

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};
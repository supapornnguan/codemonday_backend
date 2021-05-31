'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Teacher.hasMany(models.Course, {
        foreignKey: {
          field: 'teacher_id',
          allowNull: true
        },
        as: 'Course'
      })
    }
  };
  Teacher.init({
    first_name: {
      type : DataTypes.STRING,
      allowNull: false
    },
    last_name : {
      type : DataTypes.STRING,
      allowNull: false
    },
    date_of_birth : {
      type : DataTypes.STRING,
      allowNull: false
    },
    major : {
      type : DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Teacher',
  });
  return Teacher;
};
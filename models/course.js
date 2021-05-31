'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.belongsTo(models.Teacher,  { foreignKey: 'teacher_id', as: 'Teacher' } )
    }
  };
  Course.init({
    course_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    course_description: {
      type : DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};
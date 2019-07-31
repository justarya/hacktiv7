'use strict';
module.exports = (sequelize, DataTypes) => {
    const generateFormat = require('../helper/formatUang');
    const Model = sequelize.Sequelize.Model
    class Course extends Model {
        get priceFormat() {
            return generateFormat(this.price)
        }
    }
    Course.init({
        courseName: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.INTEGER,
        urlVideo: DataTypes.STRING,
        durationExpired: DataTypes.INTEGER
    }, {
        sequelize
    })
  Course.associate = function(models) {
    // associations can be defined here
  };
  return Course;
};
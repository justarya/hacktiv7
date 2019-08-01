'use strict';
module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model
    class Course extends Model {
        get priceFormat() {
            return generateFormat(this.price)
        }
        get courseName() {
            return this.courseName
        }
    }
    Course.init({
        courseName: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.INTEGER,
        urlEmbed: DataTypes.STRING,
        durationExpired: DataTypes.INTEGER
    }, {
        sequelize
    })
  Course.associate = function(models) {
    // associations can be defined here
    Course.hasMany(models.UserCourse)
    Course.hasMany(models.Video)
  };
  return Course;
};
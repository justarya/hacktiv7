'use strict';
module.exports = (sequelize, DataTypes) => {

    const Model = sequelize.Sequelize.Model;
    class UserCourse extends Model {}
    UserCourse.init({
        UserId: DataTypes.INTEGER,
        CourseId: DataTypes.INTEGER,
        startTime: DataTypes.INTEGER,
        expiredTime: DataTypes.INTEGER
    },{
        sequelize
    })
  UserCourse.associate = function(models) {
    // associations can be defined here
  };
  return UserCourse;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
    const moment = require('moment')
    const Model = sequelize.Sequelize.Model;
    class UserCourse extends Model {
        get timeExpired() {
            return `Expired ${moment(this.expiredTime).fromNow()}`
        }
        get expired () {
            return moment(new Date()).isSame(this.expiredTime)
        }
    }
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
        UserCourse.belongsTo(models.Course)
        UserCourse.belongsTo(models.User)
  };
  return UserCourse;
};
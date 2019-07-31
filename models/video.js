'use strict';
module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model
    class Video extends Model {}
    Video.init({
        CourseId: DataTypes.INTEGER,
        urlVideo: DataTypes.TEXT,
        name: DataTypes.STRING
    }, {
        sequelize
    })
  Video.associate = function(models) {
    // associations can be defined here
    Video.belongsTo(models.Course)
  };
  return Video;
};
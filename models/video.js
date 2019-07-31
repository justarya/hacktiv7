'use strict';
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Video', {
    CourseId: DataTypes.INTEGER,
    urlVideo: DataTypes.TEXT
  }, {});
  Video.associate = function(models) {
    // associations can be defined here
  };
  return Video;
};
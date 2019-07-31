'use strict';
module.exports = (sequelize, DataTypes) => {
  const Voucher = sequelize.define('Voucher', {
    code: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  Voucher.associate = function(models) {
    // associations can be defined here
  };
  return Voucher;
};
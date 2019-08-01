'use strict';
module.exports = (sequelize, DataTypes) => {
  const Voucher = sequelize.define('Voucher', {
    code: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    voucherValue: DataTypes.FLOAT
  }, {});
  Voucher.associate = function(models) {
    // associations can be defined here
  };
  return Voucher;
};
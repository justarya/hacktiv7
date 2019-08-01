'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Vouchers',[
      {
        code: 'hacktiv8',
        status: true,
        voucherValue: 80000,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        code: 'MAUBELAJAR',
        status: true,
        voucherValue: 100000,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        code: 'NGODINGKUY',
        status: true,
        voucherValue: 120000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Vouchers', null, {});
  }
};

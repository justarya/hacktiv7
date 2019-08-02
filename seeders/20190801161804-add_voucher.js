'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
          return queryInterface.bulkInsert('Vouchers', [{
            code: '6llb0qk9g0',
            status: false,
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            code: '1egg50uy9z',
            status: false,
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            code: '62nv9eke6e',
            status: false,
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            code: 'ms1iydgpan',
            status: false,
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            code: '72fm4vlsgz',
            status: false,
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            code: 'oqw7hz8sm2',
            status: false,
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            code: '6gk5dlots7',
            status: false,
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            code: 'l1y516gn1a',
            status: false,
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            code: 'pevvx2c3m0',
            status: false,
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            code: 'z8e2tm41r6',
            status: false,
            createdAt: new Date(),
            updatedAt: new Date()
          }], {});
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

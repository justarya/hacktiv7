'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Videos', [
      {
        CourseId:3,
        urlVideo:'https://www.youtube.com/embed/pPy0GQJLZUM',
        name: 'Final',
        order: 3,
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
     return queryInterface.bulkDelete('Videos', null, {});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Courses', [
      {
        courseName: 'Javascript Functional Programming',
        description: 'Javascript Functional programming is a programming method for fun programming',
        price: 15000,
        durationExpired: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseName: 'ReactJS',
        description: 'React JS is a javascript framework',
        price: 15000,
        durationExpired: 60,
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
     return queryInterface.bulkDelete('Courses', null, {});
  }
};

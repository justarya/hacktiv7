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
        CourseId:4,
        urlVideo:'https://www.youtube.com/embed/0p0JLFZj2C8',
        name: 'Introduction',
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        CourseId:4,
        urlVideo:'https://www.youtube.com/embed/GcFJjpMFJvI',
        name: 'Immersive',
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        CourseId:4,
        urlVideo:'https://www.youtube.com/embed/GhQdlIFylQ8',
        name: 'Final',
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
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

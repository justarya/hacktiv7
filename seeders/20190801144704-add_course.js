'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
          return queryInterface.bulkInsert('Courses', [{
            courseName: 'C# Course',
            description: 'C# Tutorial',
            price: 20000,
            urlEmbed: "http://i3.ytimg.com/vi/GhQdlIFylQ8/maxresdefault.jpg",
            durationExpired: 30,
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
     return queryInterface.bulkDelete('Courses', null, {});
  }
};

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
        courseName: 'Python Programming',
        description: 'Python is for fun! ',
        price: 15000,
        durationExpired: 30,
        urlEmbed: "http://i3.ytimg.com/vi/8DvywoWv6fI/maxresdefault.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseName: 'Javascript Programing',
        description: 'Javascript for better future',
        price: 15000,
        durationExpired: 30,
        urlEmbed: "http://i3.ytimg.com/vi/Mus_vwhTCq0/maxresdefault.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseName: 'Ruby Programing',
        description: 'Ruby for newbie',
        price: 15000,
        durationExpired: 60,
        urlEmbed: "http://i3.ytimg.com/vi/wbZ6yrVxScM/maxresdefault.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseName: 'C# Programing',
        description: 'C# for legend',
        price: 15000,
        durationExpired: 20,
        urlEmbed: "http://i3.ytimg.com/vi/GhQdlIFylQ8/maxresdefault.jpg",
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

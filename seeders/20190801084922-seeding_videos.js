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
        CourseId:1,
        urlVideo:'https://www.youtube.com/embed/rfscVS0vtbw',
        name: 'Introduction',
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        CourseId:1,
        urlVideo:'https://www.youtube.com/embed/8DvywoWv6fI',
        name: 'Immersive',
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        CourseId:1,
        urlVideo:'https://www.youtube.com/embed/W8KRzm-HUcc',
        name: 'Final',
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        CourseId:2,
        urlVideo:'https://www.youtube.com/embed/W6NZfCO5SIk',
        name: 'Introduction',
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        CourseId:2,
        urlVideo:'https://www.youtube.com/embed/Mus_vwhTCq0',
        name: 'Immersive',
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        CourseId:3,
        urlVideo:'https://www.youtube.com/embed/t_ispmWmdjY',
        name: 'Introduction',
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        CourseId:3,
        urlVideo:'https://www.youtube.com/embed/Dji9ALCgfpM',
        name: 'Immersive',
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
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

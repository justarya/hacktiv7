const routes = require('express').Router();
const CourseController = require('../controllers/CourseController');

routes.get('/', (res,req) => res.send('test'));
routes.get('/:id');
routes.get('/:id/video/:id');

module.exports = routes;
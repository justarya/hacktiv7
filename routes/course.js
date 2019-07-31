const routes = require('express').Router();
const CourseController = require('../controller/CourseController');

routes.get('/', (res,req) => req.render('./course'));
routes.get('/:id', (res,req) => req.render('./course/item'));
routes.get('/:id/video/:id', (res,req) => req.render('./course/video'));

module.exports = routes;
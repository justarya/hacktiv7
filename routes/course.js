const routes = require('express').Router();
const CourseController = require('../controller/CourseController');

routes.get('/', CourseController.loadIndex);
routes.get('/:id', CourseController.loadCourse);
routes.get('/:idc/video/:idv', CourseController.loadVideo);

module.exports = routes;
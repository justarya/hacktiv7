const routes = require('express').Router();
const CourseController = require('../controllers/CourseController');

routes.get('/', CourseController.loadIndex);
routes.get('/:id', CourseController.loadCourse);
routes.get('/:id/video/:id');

module.exports = routes;
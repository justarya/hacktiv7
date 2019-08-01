const routes = require('express').Router();
const CourseController = require('../controller/CourseController');
const auth = require('../middleware/auth')

routes.get('/', auth, CourseController.loadIndex);
routes.get('/:id', auth, CourseController.loadCourse);
routes.get('/:idc/video/:idv', auth, CourseController.loadVideo);
routes.get('/:id/buy', auth, CourseController.cutBalance)
module.exports = routes;
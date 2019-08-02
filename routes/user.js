const routes = require('express').Router();
const UserController = require('../controller/UserController');
const VoucherController = require('../controller/VoucherController');
const auth = require('../middleware/auth');

routes.get('/',auth,UserController.loadUser);
routes.post('/',auth,UserController.editUser);
routes.post('/validateVoucher',auth,VoucherController.validateVoucher)
module.exports = routes;
const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const employeeRoutes = require('./employee-routes');
const roleRoutes = require('./role-routes');
const departmentRoutes = require('./department-routes');
const csvRoutes = require('./csv-routes');

router.use('/users', userRoutes);
router.use('/employees', employeeRoutes);
router.use('/roles', roleRoutes);
router.use('/departments', departmentRoutes);
router.use('/csv', csvRoutes);

module.exports = router;
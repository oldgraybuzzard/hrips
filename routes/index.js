// future development
const express = require('express');
const router = express.Router();

router.use(require('./apiRoutes/departmentRoutes'));
router.use(require('./apiRoutes/employeeRoutes'));
router.use(require('./apiRoutes/roleRoutes'));

module.exports = router;
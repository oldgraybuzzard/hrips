// future development
const express = require('express');
const router = express.Router();

router.use(require('./api/departmentRoutes'));
router.use(require('./api/employeeRoutes'));
router.use(require('./api/roleRoutes'));

module.exports = router;
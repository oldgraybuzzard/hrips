// future development
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const importRoutes = require('./import-routes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/import', importRoutes);

module.exports = router;
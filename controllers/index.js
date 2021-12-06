// future development
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const importSheetsRoutes = require('./importSheets-routes');
const importCSVRoutes = require('./importCSV-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/sheets-import', importSheetsRoutes);
router.use('/csv-import', importCSVRoutes);

module.exports = router;
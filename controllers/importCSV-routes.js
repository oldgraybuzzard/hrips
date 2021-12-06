const router = require('express').Router();
const csv = require('csvtojson');
const { parse } = require('jsontocsv');
const csvFilePath = ('./public/upload/employee.csv');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
    //   res.json(jsonObj);
    })
    res.render('csv-import', {
      loggedIn: req.session.loggedIn
    })
  });
        


module.exports = router;
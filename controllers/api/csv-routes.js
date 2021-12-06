const router = require('express').Router();
const csv = require('csvtojson');
const { parse } = require('jsontocsv');
const csvFilePath = ('./public/upload/employee.csv');


router.get('/', (req, res) => {
  csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    // console.log(jsonObj);
    res.json(jsonObj);
  })
});

  const jsonArray=csv().fromFile(csvFilePath);



// const csvData = [];

// router.get('/', (req,res) => {
//   fs.createReadStream('./public/upload/employee.csv')
//       .pipe(
//         parse({
//           delimiter: ',',
//           header: true
//         })
//       )
//       .on('data', function (dataRow) {
//         csvData.push(dataRow);
//       })
//       .on('end', function () {
//         res.json(csvData);
//         console.log(csvData);
//       })
//       .then
        
// })


module.exports = router;


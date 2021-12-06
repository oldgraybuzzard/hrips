const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers/');
const csv = require('csv');
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

const csvData = require('./public/javascript/csv');



// const getSheets = require('./public/javascript/spreadsheet');


const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: ';lkjd?LJF)9*)Ujj_)#*k;ldjf4?!jf1k2l8djf7poah',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const helpers = require('./utils/helpers');
const { get } = require('http');

const hbs = exphbs.create({ helpers });

//CSV import and exporting
csv
// Generate 20 records
.generate({
  delimiter: '|',
  length: 20
})
// Parse the records
.pipe(csv.parse({
  delimiter: '|'
}))
// Transform each value into uppercase
.pipe(csv.transform(function(record){
   return record.map(function(value){
     return value.toUpperCase()
   });
}))
// Convert the object into a stream
.pipe(csv.stringify({
  quoted: true
}))
// Print the CSV stream to stdout
.pipe(process.stdout)
//end CSV section

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
-
app.use(require('./controllers'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
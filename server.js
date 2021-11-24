const express = require('express');
const db = require('./config/connection');
//api route for future development
const apiRoutes = require('./controllers');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
-
// Use apiRoutes - for future development
app.use('/api', apiRoutes);

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      
    });
  });
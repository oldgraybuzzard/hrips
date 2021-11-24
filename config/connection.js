const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'sCJAF5rSy9z0kd4SELWu',
      database: 'hrips_db'
    },

  );


  module.exports = db;
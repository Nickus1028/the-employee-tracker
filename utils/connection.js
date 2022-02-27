const mysql = require('mysql2')
const promisemysql = require('mysql2/promise');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'ODBC',
    password: '',
    database: 'employee_tracker',
  });

  connection.connect(function(err) {
      if (err) throw err;
      console.log("Connected to database.")
  });

  module.exports = connection;
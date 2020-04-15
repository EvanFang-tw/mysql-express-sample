const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'appuser',
  password: 'password',
  database: 'mydb'
});

function query(sql, args) {
  return new Promise((resolve, reject) => {
    connection.query(sql, args, function (err, result, fields) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = { query };

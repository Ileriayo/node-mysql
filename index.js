const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'u53rname',
  password : 'pa55w0rd',
  database : 'food_db'
});

connection.connect((err) => {
    if (err) {
        console.log('Connection error message: ' + err.message);
        return;
    }
    console.log('Connected!');
});

const queryString = 'select * from tbl_nig_dishes';

connection.query(queryString, (err, res, fields) => {
  if (err) {
    console.log('Error: ' + err);
    return;
  }
  console.log('Here is the result of the query:');
  console.log('===========================================');
  console.log(res);
  console.log('===========================================');
});
   
connection.end();
const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'mydb'
})
const command = `INSERT INTO employees(name) VALUES('Edson Koguishi')`
connection.query(command)
result = [];
connection.query("SELECT * FROM employees", function (err, rows) {
  if (!err && rows.length > 0) {
    result = rows;
  }
});
connection.end

// app.get('/', function (req, res, next) {
//   pool.getConnection(function (err, connection) {
//       connection.query("SELECT * FROM employees", function (err, rows) {
//           if (!err && rows.length > 0) {
//               res.json(rows);
//           } else {
//               res.json([]);
//           }
//       });
//     }
//   );
// });

app.get('/', (req, res) => {
  res.json(result);

  // res.send('<h1>Full Cycle Rocks!</h1>')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
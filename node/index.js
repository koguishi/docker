const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
})
const command = `INSERT INTO people(name) VALUES('Edson Koguishi')`
connection.query(command)
result = [];
connection.query("SELECT * FROM people", function (err, rows) {
  if (!err && rows.length > 0) {
    result = rows;
  }
});
connection.end

app.get('/', (req, res) => {
  // res.json(result);
  html = '<h1>Full Cycle Rocks!</h1>'
  result.forEach(element => {
    html += '<li>' + element.name + '</li>';
  });
  res.send(html);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('<h1>Full Cycle Rocks! - signing commits by edson koguishi</h1>')
})

app.listen(port, () => {
  console.log(`Hello example, by edson koguishi, listening on port ${port}`)
})
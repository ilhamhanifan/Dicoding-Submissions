const express = require('express')
const path = require('path')
const app = express()
const port = 8080

app.use(express.static(__dirname + '/www'))

app.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname, '/www/index.html'));
})

app.listen(port, () => {
  console.log(`App running on ${port}`)
})
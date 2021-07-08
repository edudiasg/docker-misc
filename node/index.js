const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>NodeJS Express ready do go!</h1')
})

app.listen(port, () => {
  console.log('Running at port ' + port)
})
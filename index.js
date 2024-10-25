require('dotenv').config()
const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('gaurav is back')
})

app.get('/login', (req, res) => {
  res.send('<h1> chai is ready </h1>')
})








app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

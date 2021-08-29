const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routers = require('./routers/server')
const users = require('./models/users')
const bodyParser = require('body-parser')
const url = 'mongodb://127.0.0.1:27017/mydb'
mongoose.connect(url, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
db.once('open', (_) => {
  console.log('Database connected:', url)
})

db.on('error', (err) => {
  console.error('connection error:', err)
})
app.use(bodyParser.json())

app.use(routers)

app.listen(4000, function () {
  console.log('server is working')
})

const e = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
})
const users = new mongoose.model('users', userSchema)
module.exports = users

const { Router } = require('express')
const express = require('express')
const router = new express.Router()
const userDetails = require('./models/users')
router.post('/addusers', async (req, res) => {
  try {
    const addUser = new userDetails({
      name: req.body.name,
      email: req.body.email,
    })
    addUser.save().then(() => {
      req.status(400).send(addUser)
      console.log('error')
    })
  } catch (e) {
    res.send(e)
  }
})
router.get('/allUsers', async (req, res) => {
  try {
    const getUsers = await userDetails.find()
    res.send(getUsers)
  } catch (e) {
    res.send(e)
  }
})

module.exports = router

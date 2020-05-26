const express = require('express')
const Ingredient = require('../model/ingredient')

const router = new express.Router()

router.get('/ingredients', async (req,res) => {
    res.status(200).send('Hello there ingredients.')
})

module.exports = router


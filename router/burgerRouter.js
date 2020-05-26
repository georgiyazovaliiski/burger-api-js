const express = require('express')
const burgerService = require('../service/burgerService')

const router = new express.Router()

router.get('/burgers', async (req,res) => {
    let result

    if(req.query['name'])
        result = await burgerService.getBurgerByName(req.query['name'])
    else
        result = await burgerService.getBurgers(req.query["page"],req.query["pageSize"])

    if(result === null || result.length < 1) {
        return res.status(404).send('Did not find any burgers')
    }

    res.status(200).send(result)
})

router.get('/burgers/:id', async (req,res) => {
    let burger
    if(req.params.id === "random") burger = await burgerService.getRandom();
    else burger = await burgerService.getBurger(req.params.id)

    if(!burger){
        return res.status(404).send('Burger with ID ' + req.params.id + ' could not be found.')
    }
    res.status(200).send(burger)
})

router.post('/burgers',async (req,res) => {
    const burgerAdded = await burgerService.addBurger(req.body)

    if(burgerAdded === undefined) {
        return res.status(400).send("Something went wrong. Try using proper argument names and values.")
    }
    res.status(200).send(burgerAdded)
})

module.exports = router


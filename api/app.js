const express = require('express')
const mongoose = require('../db/mongodb')
const ingredientRouter = require('../router/ingredientRouter')
const burgerRouter = require('../router/burgerRouter')
const bodyParser = require('body-parser')
const limiter = require('../rate-limiter/limiter')
const forceSSL = require('express-force-ssl')

const app = express()
const port = process.env.PORT || 3000

app.use(forceSSL)
app.use(limiter);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(ingredientRouter)
app.use(burgerRouter)

app.listen(port, ()=>{
    console.log('Server listening on port: ', port)
})
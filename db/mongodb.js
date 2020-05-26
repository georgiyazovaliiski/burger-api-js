const mongodb = require("mongoose")

const dbUrl = "mongodb://127.0.0.1:27017/burger-api"

mongodb.connect(dbUrl,{
    useNewUrlParser:true,
    useCreateIndex:true
})


const mongodb = require("mongoose")

const dbUrl = "mongodb://heroku_p9k6qfp4:mongo123@ds131510.mlab.com:31510/heroku_p9k6qfp4"
//const dbUrl = "mongodb://127.0.0.1:27017/burger-api"

mongodb.connect(dbUrl,{
    useNewUrlParser:true,
    useCreateIndex:true
})


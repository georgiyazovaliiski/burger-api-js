const mongoose = require("mongoose")
const Schema = mongoose.Schema

let burgerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    ingredients: [
        {
            type: String,
            required:false
        }
    ]
})

const Burger = mongoose.model("Burger",burgerSchema)

module.exports = Burger
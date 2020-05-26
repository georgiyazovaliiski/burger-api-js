const mongoose = require('mongoose')

const Ingredient = mongoose.model("Ingredient",{
    name: {
        type: String,
        required: true,
        trim: true,
        unique:true
    }
})

module.exports = Ingredient
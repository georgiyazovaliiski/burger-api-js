const Burger = require('../model/burger')
const handle = require('../error/error-handler')

const addBurger = async (BurgerDTO) => {
    await new Burger(BurgerDTO).save().catch(handle)
}

const getBurgers = async (page,pageSize) => {
    const skipping = (page-1)*pageSize
    const size = pageSize

    return Burger.find({})
        .skip(Number.parseInt(skipping))
        .limit(Number.parseInt(size))
        .catch(handle);
}

const getBurger = async (id) => {
    return await Burger.findById(id)
        .then((result)=> { return result } )
        .catch(handle)
}

const getRandom = async () => {
    const count = await Burger.countDocuments()
    const random = Math.floor(Math.random() * count)

    return await Burger.findOne()
        .skip(random)
        .then((result) => {
            return result
        })
        .catch(handle)
}

const getBurgerByName = async (name) => {
    return await Burger.findOne().where('name').equals(name).catch(handle);
}

module.exports = {addBurger, getBurgers, getBurger, getRandom, getBurgerByName}

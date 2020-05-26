const handleError = (e,res,code) => {
    res.status(code).send("Something went wrong: ", e.message)
}

module.exports = handleError
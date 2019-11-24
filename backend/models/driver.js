const mongoose = require('mongoose')

const driverSchema = new mongoose.Schema({
    name: {
        type: String
    },
    user_name: {
        type: String
    },
    pasword: {
        type: String
    },
    token: {
        type: String
    },
    user_type: "Driver"
})

const Driver = mongoose.model('Driver', driverSchema)
module.exports = Driver
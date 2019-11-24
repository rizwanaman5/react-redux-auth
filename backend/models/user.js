const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
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
    user_type: "User"
})

const User = mongoose.model('User', userSchema)
module.exports = User
const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    name: {
        type: String
    },
    user_name: {
        type: String
    },
    pasword: {
        type: String
    },
    user_type: "Admin"
})

const Admin = mongoose.model('Admin', adminSchema)
module.exports = Admin
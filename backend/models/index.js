const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/authDB', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    (err) => {
        if (err) throw err
        console.log('successfully connected to mongoDB')
    })

module.exports.Admin = require('./admin')
module.exports.User = require('./user')
module.exports.Driver = require('./driver')

// these are keys that we are making in the export variable. So when we import this page as db later on, we will be able to access
// the following variables as db.Admin and db.User and db.Driver

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, minlength: 5},
    password: {type: String, required: true, minlength: 5},
    email: {type: String, required: true, minlength: 5},
    name: {
        first: {type: String, required: true, minlength: 3},
        last: {type: String, required: true, minlength: 3}
    },
    address: [String],
    orders: [String]
})

const User = mongoose.model('User',userSchema);

module.exports = User;
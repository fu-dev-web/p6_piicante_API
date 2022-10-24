const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userScheman = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

userScheman.plugin(uniqueValidator);

module.exports = mongoose.model('user', userScheman);
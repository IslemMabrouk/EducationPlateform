const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    phoneNumber : Number,
    dateOfBirth : String,
    password : String,
    confirmPassword : String,
    state : String,
    division : String
})

const user = mongoose.model('User', userSchema);
module.exports = user;

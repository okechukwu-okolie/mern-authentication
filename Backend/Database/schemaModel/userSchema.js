
const mongoose = require('mongooose');
const { Schema } = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const UserInput =  Schema.model('UserInput',userSchema)

module.exports = UserInput;

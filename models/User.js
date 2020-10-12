// pull in the required dependencies
const mongoose = require('mongoose');

// create a schema to represent a user, defining fields and types as objects of the Schema
const Schema = mongoose.Schema;

// create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('users', UserSchema);

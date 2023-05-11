const mongoose = require('mongoose');
const {model} = require("mongoose");
const {Schema} = mongoose;

// user schema, blueprint for users

const UserSchema = new Schema({
    username: {type: String, required: true, min: 4, unique: true},
    password: {type: String, required: true},
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;

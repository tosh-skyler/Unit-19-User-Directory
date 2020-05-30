const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userId:{
        type: String,
        default: uuidv4()
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    position: {
        type: String,
        require: true
    }
});

module.exports = User = mongoose.model('users', UserSchema);
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }, 
    email: {
        type: String,
        require: true,
        // unique: [true, "Email is already taken"]
    },
    password: {
        type: String,
        require: true,
        minlength: [6, "password must be equal or greater than 6 characters"]
    },
}, {
    timestamps: true
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
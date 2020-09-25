const mongoose = require('mongoose');
const validator = require('validator');

/* 
{
    email: 'gomar8138@gmail.com',
    password: '1561651d35f435rrvrgt',
    token: [{
        access: 'auth',
        tokens: 'fd3a54had35h1t35315atd3j4'
    }]
}
*/

const User = mongoose.model('User', {
    email: {
        type: String,
        require: true,
        trim: true,
        minlength: 1,
        // The user has to be unique
        unique: true,
        // Search in Google: 'mongoose custom validatos'
        validate: {
            validator: validator.isEmail,
            // Message in case email is invaid
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            reuired: true
        },
        token: {
            type: String,
            require: true
        }
    }]
});
module.exports = {User};
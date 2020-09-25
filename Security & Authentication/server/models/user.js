const mongoose = require('mongoose');
const validator = require('validator');

// The 'Schema' propperty of 'mongoose' let us define a new sche,a for the usel model
// We need the Schema propperty to define on the model methods and the instance methods
// The Schema constructor takes an object that is going to be all the atributes 
const UserSchema = new mongoose.Schema({
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
    }
);

// Defined the instance methods 

// Tell mongoose what should send back when the user model is converted to a json object

// Generate token

// Remove token

// Pass the user Schema into de model.
const User = mongoose.model('User', UserSchema);

module.exports = {User};
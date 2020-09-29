const User = mongoose.model('User', {
    email: {
        type: String,
        require: true,
        trim: true,
        minlength: 1,
        unique: true
    },
    name: {
        type: String,
        require: true,
        trim: true,
        minlength: 1
    }
});
const bcrypt = require('bcryptjs');

const password = '1234abc';

// Creates  random value at at the end of what is going to be hashed so nobody can create a list of hashed words and match the tables to get the real password
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (error, hash) => {
        console.log('hash', hash);
    });
});

// The generated hash in the previous function call is similar to the following
const hashedPassword = '$2a$10$3YkWh7NkfZC/JpL.FlqEd.pg/EHJZ2wUYKie49sNsRAdV22mR03RS';

bcrypt.compare(password, hashedPassword, (error, response) => {
    console.log(response);
});

bcrypt.compare('abc1234', hashedPassword, (error, response) => {
    console.log(response);
});
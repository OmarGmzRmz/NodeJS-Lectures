// Require the module for hashing data
const { 
    SHA256 // Hashing method
} = require('crypto-js');

const message = 'I am user 3';
const hash = SHA256(message).toString();

console.log('Message', message);
console.log('hash', hash);

// It is a bad idea to store plain text in databases.
// We need to store the passwords in a hashed format.

// Data we are going to be sending in requests (Authorization headers)
const data = {
    id: 4 
};

// The token is what we are going to be sending bakc to the client
//This is what we pass back and forward
var secret = 'jajajaloqueseaxdxdxd666'; // This secret lives only in the server and ir is hidden from the Hacker(man in the middle)
const token = {
    data, 
    hash: SHA256(JSON.stringify(data) + secret).toString()
};

// Man in the middle
token.data.id = 5;
token.hash = SHA256(JSON.stringify(token.data)).toString();

// Data that may have been manipulated 
const resultHash = SHA256(JSON.stringify(token.data) + secret).toString();

if (resultHash === token.hash) {
    console.log('Data was not changed');
} else {
    console.log('Data was changed. Do Not Trust!');
}
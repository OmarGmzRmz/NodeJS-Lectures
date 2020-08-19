const express = require('express');
var app = express();

app.get('/', (request, response) => {
    response.send('Hello world');
});

app.get('/pageNotFound', (request, response) => {
    response.status(404).send({
        error: 'Page not found'
    });
});

app.get('/someRoute', (request, response) => {
    response.status(409).send({
        error: 'There was a conflict with your request'
    });
});

app.get('/users', (request, response) => {
    response.status(200).send([
        {
            fullName: 'Omar Gomez Ramirez',
            age: '21',
            likes: ['football', 'FIFA']
        },
        {
            fullName: 'Bernardo Mondragon Brozon',
            age: '26',
            likes: ['football', 'math']
        }
    ]);
});

app.listen(3000);

module.exports.app = app;
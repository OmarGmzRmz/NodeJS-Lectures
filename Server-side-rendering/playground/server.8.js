const express = require('express');
const path = require('path');
const hbs = require('hbs'); //Templeting (Template: html, xml o parecido)
const PORT = 3000;

const app = express();

// Partials

hbs.registerPartials('./views/partials');

// Helpers

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear(); // Current year
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.set('view engine', 'hbs');


const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.get('/about', (request, response) => {
    const dynamicData ={
        pageTitle: 'about'
    };
    response.render('about.8.hbs', dynamicData);
});

app.get('/help', (request, response) => {
    const queryParams = request.query;
    console.log(queryParams);
    const name = queryParams.name;
    const dynamicData ={
        pageTitle: 'help',
        name
    };
    response.render('help.8.hbs', dynamicData);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


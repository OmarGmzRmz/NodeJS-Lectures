const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const path = require('path');
const PORT = 3000;

const app = express();

hbs.registerPartials('./views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear(); 
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});
hbs.registerHelper('screamItAgain', (text) => {
    return text.toUpperCase();
});
app.set('view engine','hbs');

const publicDirectoryPath = path.join(__dirname, './public');
app.use(express.static(publicDirectoryPath));

// use middleware for logs
app.use((request, response, next) => {
    const now = new Date().toString();
    const log = `${now}: ${request.method} ${request.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (error) => {
        if (error) {
            console.log('Unable to append to server.log');
        }
    });
    next();
});

app.use((request, response, next) => {
    const maintenance = false;
    if (maintenance) {
        const dynamicData = {
            pageTitle: 'maintenance',
            maintenanceMessage: 'Sorry this site is currently on maintenance.'
        }
        response.render('maintenance.hbs', dynamicData);
    } else {
        next();
    }
});

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


app.get('/menu', (request, response) => {
    const queryParams = request.query;
    console.log(queryParams);
    const name = queryParams.name;
    const dynamicData = {
        pageTitle: 'menu',
        name
    };
    response.render('mySite.hbs', dynamicData);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} `);
});

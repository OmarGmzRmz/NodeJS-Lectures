const express = require('express');
const path = require('path');
const PORT = 3000;

const app = express();
app.set('view engine', 'hbs');


const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.get('/about', (request, response) => {
    const randomNumber = Math.random();
    let title;
    if (randomNumber > 0.5) {
        title = 'My title 2';
    }
    else {
        title = 'My title 1';
    }
    const dynamicData ={
        pageTitle: title
    };
    response.render('about.5.hbs', dynamicData);
});

// TODO: tarea
// 1.-crear un endpoint llamado /help
// 2.-el endpoint debe de devolver una pagina html con datos dinamicos  (utilizar hbs)
// 3.-obtener el dato dinamico del query param (hint: localhost:3000?name=Omar) y que el dato aparezca en el codigo html

app.get('/help', (request, response) => {
    const queryParams = request.query;
    console.log(queryParams);
    const name = queryParams.name;
    const randomNumber = Math.random();
    let title;
    if (randomNumber > 0.5) {
        title = 'My title 2';
    }
    else {
        title = 'My title 1';
    }
    const dynamicData ={
        pageTitle: title,
        name
    };
    response.render('help.5.hbs', dynamicData);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


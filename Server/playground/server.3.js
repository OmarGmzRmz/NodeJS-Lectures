const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, './public'));

//point to the public directory
const publicDirectoryPath = path.join(__dirname, './public');

//tell expres app the location of public files
app.use(express.static(publicDirectoryPath));

app.get('/getHtmlCode', (request, response ) => {
    //devolver codigo html:
    /* 
    h hypert
    t text
    m markup
    l language
     */
    response.send(`
    <!--hi: heading size 1-->
    <h1>Hello world from html</h1>
    <div style= "background-color: purple; margin: 80px; padding: 40px; color: yellow; border; 1px dashed orangered; text-align: center;">Hola, ¿Cómo estas?</div>
    <div style= "background-color: red; margin: 80px; padding: 40px; color: white; border; 1px dashed orangered; text-align: center;">¿Le vas a las chivas tu también?</div>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

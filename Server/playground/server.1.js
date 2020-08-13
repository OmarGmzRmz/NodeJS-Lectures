//requerir express para programar un servidor
const express = require('express');

//Inicializar app de express 
const app = express();

//decirle a la app que hacer cuando se accede al endpoint GET / 
//request almacena inf acerca de la peticion , por ejemplo, headers, body, path, queryParams
//response tiene varios metodos para poder contestar la peticion
app.get('/', (request, response ) => {
//responder a la peticion(GET / ) mandando cierta inf:
    response.send('Hello world from express');
});

//iniciar la app en un puerto de la computadora
app.listen(3000);
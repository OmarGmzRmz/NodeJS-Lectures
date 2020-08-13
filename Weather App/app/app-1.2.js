//no promises

var requets = require('request');  // peticiones
const yargs = require('yargs'); // interfaz en terminal
const geocode = require('./../own-modules/geocode.js');
const { geocodeAddress } = require('../own-modules/geocode.js');

const argv = yargs.option({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
}).help().alias('help', 'h').argv;

//TODO: Tarea
/* 
1. llamar la funcion geocodeAddress
2. imprimir el mensaje 'Found Location'
3. imprimir con JSON.stringify el resultado de geocodeAddress
4. si geocodeAddress regresa error imprimir el mensaje de error que reegresa geocodeAddress
 */

//solucion:

 var handler = (errorMessage, result) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log('Found location');
        console.log(JSON.stringify(result, undefined, 2));
    }
};

geocode.geocodeAddress(argv.address, handler);
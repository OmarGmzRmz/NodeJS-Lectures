const yargs = require('yargs'); // interfaz en terminal
const axios = require('axios'); // peticiones con promesas

const argv = yargs.option({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
}).help().alias('help', 'h').argv;

var encodedAddress = encodeURIComponent(argv.address);
var apiKey = 'AIzaSyAjKVL0P-26C6Qw8TpcK4fskV8gr-alvxE';

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`).then((response) => {
    if (response.data.status === 'ZERO RESULTS') {
        console.log('Address not found');
    } else if (response.data.status === 'OK') {
        var result = {
            address: response.data.results[0].formatted_address, 
            latitud: response.data.results[0].geometry.location.lat,
            longitud: response.data.results[0].geometry.location.lng 
        }
        console.log(JSON.stringify(result, undefined, 2));
    }
}, (error) => {
    console.log(error);
});
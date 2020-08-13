//NO promises

var requets = require('request');  // peticiones
const yargs = require('yargs'); // interfaz en terminal
const request = require('request');

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

var requestObject = {
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`,
    json: true,
    method: 'GET'
}

var callbackArrowFunction = (error, response, body)  => {
    if (error) {
        console.log(JSON.stringify(error, undefined, 2));
    } else if (body.status === 'ZERO_RESULTS') {
        console.log('Unable to get location for that address');
    } else {
        console.log(`Address: ${body.results[0].formated_address}`);
        console.log(`Address: ${body.results[0].geometry.location.lat}`);
        console.log(`Address: ${body.results[0].geometry.location.lng}`);
    }
};

request(requestObject, callbackArrowFunction);
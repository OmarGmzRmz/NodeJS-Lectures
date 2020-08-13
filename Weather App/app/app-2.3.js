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
var apiKey2 = 'af69374bbdmsh42f6cfdb67ce103p19f0d5jsn58a6ec6b7e26';

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
        //TODO: tarea: 
        //1.- devolver otra promesa llamando a la funcion axios.get
        //2.- la peticion va para rapidApi
        //3.- obtener el weather para la address
        //4.- redactar la logica para cuando se complete esat segunda promesa
        
        return axios.get(`https://community-open-weather-map.p.rapidapi.com/weather?lat=${result.latitud}&lon=${result.longitud}`,{
            headers: {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": apiKey2,
                "useQueryString": true
            },
            json: true
        });
    } 
    
}, (error) => {
    console.log(error);
}).then((res) => {
    console.log(res.data);
}, (error) => {
    console.log('Something went wrong retriveing the weather.');
    console.log(error);
});
var request = require('request');

var geocodeAddres = function (address) {
    return new Promise ((resolve, reject) => {
       var encodedAddress = encodeURIComponent(address);
       var apiKey = 'AIzaSyAjKVL0P-26C6Qw8TpcK4fskV8gr-alvxE';
       var requestObject = {
           url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`,
           json: true
       };
       console.log('Retriveing location');
       request(requestObject, (error, response, body) => {

            console.log('response');

            if (error) {
                console.log(JSON.stringify(error, undefined, 2));
                reject('unable to conect to google servers');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find that address');
            } else if (body.status === 'OK') {
                var result = {
                    address: body.results[0].formatted_address, 
                    latitud: body.results[0].geometry.location.lat,
                    longitud: body.results[0].geometry.location.lng 
                };
                resolve(result);
            }
       });
    });
}
var address = ('Uruapan'); 
geocodeAddres(address).then((result) => {
    console.log(result);
}, (res) => {
    console.log(res);
});
 

// API: Application Programming Interface (Google API)

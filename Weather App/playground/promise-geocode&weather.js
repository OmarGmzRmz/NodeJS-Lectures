var request = require('request');

var geocodeAddress = function (address) {
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



// API: Application Programming Interface (Google API)

var getWeather =  (lat, lng) => {
    return new Promise ((resolve, reject) => {
       var requestObject = {
           url: `https://community-open-weather-map.p.rapidapi.com/weather?lat=${lat}&lon=${lng}`,
           headers: {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "af69374bbdmsh42f6cfdb67ce103p19f0d5jsn58a6ec6b7e26",
            "useQueryString": true
           },
           json: true
       };
       console.log('Retriveing Weather data\n');
       request(requestObject, (error, response, body) => {
           if (error) {
               reject('Something went wrong.');
           } else if (response.statusCode === 200){
               resolve({
                   getWeatherData: response.body
               });
           } else {
               console.log(response.body);
           }
            });
    });
}

var address = ('london'); 
geocodeAddress(address).then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
    return getWeather(res.latitud, res.longitud);
}, (res) => {
    console.log('Something went wrong retriveing location.')
    console.log(res);
}).then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
}, (res) => {
    console.log('Something went wrong retriveing the weather.');
    console.log(res);
});

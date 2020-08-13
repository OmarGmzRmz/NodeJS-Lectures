const request = require('request');

var getWeather = (lat, lng, callback) => {
    const apiKey = 'af69374bbdmsh42f6cfdb67ce103p19f0d5jsn58a6ec6b7e26';
    var encodedLat = encodeURIComponent(lat);
    var encodedLng = encodeURIComponent(lng);
    var requestObject = {
        url: `https://community-open-weather-map.p.rapidapi.com/weather?lat=${encodedLat}&lon=${encodedLng}&units=metric`,
        headers: {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": apiKey,
            "useQueryString": true
        },
        json: true
    };
    console.log('Retriveing weather data');
    var callbackArrowFunction = (error, response, body) => {
        if (error) {
            console.log(JSON.stringify(error, undefined, 2));
            callback('Unable to reach servers');
        } else if (response.statusCode === 200) {
            var result = {
                getWeatherData: response.body
            }; 
            callback(undefined, result);
        } else if (response.statusCode === 400) {
            console.log('Bad arguments');
        }
    };
    request(requestObject, callbackArrowFunction);
};

module.exports.getWeather = getWeather;
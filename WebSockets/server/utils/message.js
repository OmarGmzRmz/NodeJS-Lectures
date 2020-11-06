const moment = require('moment');
const generateMessage = (from, text) => {
    return {
        from,
        text,
        // CreatedAt = new Date();
        // Better use moment
        createdAt: moment().valueOf()
    }
};
const generateLocationMessage = (from, latitude, longitude) => {
    return {
        from, 
        url:`https://www.google.com/maps?q=${latitude},${longitude}`,
        createdAt: moment().valueOf()
    };
};

module.exports = {
    generateMessage,
    generateLocationMessage
};
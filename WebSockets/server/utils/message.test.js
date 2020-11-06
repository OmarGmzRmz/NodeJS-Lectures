const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () =>{
    it('Should generate correct message object', () => {
        const from = 'Bernardo';
        const text = 'Some test data';
        const message = generateMessage(from, text);
        expect(message).toInclude({from, text});
        expect(message.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () =>{
    it('Should generate correct location message', () => {
        const from = 'Bernardo';
        const latitude = 13;
        const longitude = 54;
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

        const message = generateLocationMessage(from, latitude, longitude);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});
    });
});


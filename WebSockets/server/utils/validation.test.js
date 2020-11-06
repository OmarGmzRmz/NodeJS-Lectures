const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
    it('Should reject non-string values', () => {
        const res = isRealString(98);
        expect(res).toBe(false);
    });

    it('Should reject strings with only spaces', () => {
        const res = isRealString(' ');
        expect(res).toBe(false);
    });

    it('Should allow valid strings', () => {
        const res = isRealString('Bernardo');
        expect(res).toBe(true);
    });
});
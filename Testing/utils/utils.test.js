const expect = require('expect');
const utils = require('./utils');

it('should add two numbers summing greater than 100', () => {
    const res = utils.add(331, 32);
    if (res <= 100) {
        throw new Error(`Expected something greater than 100 but got ${res}`);
    }
});

it('should square a number', () => {
    const num = 3;
    const res = utils.square(num);
    if (res !== num*num) {
        throw new Error(`Expected the number squared but got ${res}`);
    }
});

it('should add two numbers summing greater than 100', () => {
    const res = utils.add(105, 30);
    expect(res).toBeGreaterThan(100);
});

it('should add two numbers getting 100', () => {
    const res = utils.add(120, -20);
    expect(res).toBe(100);
});

it('should square a number getting a number', () => {
    const res = utils.square(3);
    if (typeof res !== 'number') {
        throw new Error (`Expected a number but got ${typeof res}`);
    }
});

it('should not be equal', () => {
    expect(11).not.toBe(19);
});

describe('Objects', () => {
    it('Objects should be the same', () => {
       /*  expect({
            name: 'Omar'
        }).toBe({
            name: 'Omar'
        }) */
        const object = {
            name: 'Omar'
        };
        expect(object).toBe(object);
    });

    it('Objects should be the same', () => {
        expect({
            name: 'Omar'
        }).toEqual({
            name: 'Omar'
        })
    });

    it('Objects should not be equal', () => {
        expect({
            name: 'Omar'
        }).not.toEqual({
            name: 'Omer'
        })
    });
    
    it('Object should include specified prepperty', () => {
        expect({
            firstName: 'Omar',
            lastName: 'Gomez'
        }).toHaveProperty('firstName');
    });

    it('Object should include specified prepperty', () => {
        expect({
            firstName: 'Omar',
            lastName: 'Gomez'
        }).toHaveProperty('firstName', 'Omar');
    });

    it('Object should include specified prepperty', () => {
        expect({
            username: 'Omar'
        }).not.toHaveProperty('password');
    });

    it('Object should have name and lasta name set', () => {
        const person = {
            age: '21'
        };
        const res = utils.setName(person, 'Omar Gomez');
        expect(res).toHaveProperty(['firstName']);
        expect(res).toHaveProperty(['lastName']);
        
    });
});

describe('Arrays', () => {
    it('should include number 3', () => {
        expect([1,2,3,4,5,6,7,8,9]).toContain(3);
    });

    it('should include number 3', () => {
        expect([1,2,3,4,5,6,7,8,9]).not.toContain(13);
    });
    
    describe('Nested describe block', () => {
        it('should include number 3', () => {
            expect([1,2,3,4,5,6,7,8,9]).not.toContain(13);
        });
        
    });
});

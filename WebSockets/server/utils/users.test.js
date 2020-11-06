const expect = require('expect');

const { Users } = require('./users');

describe('Users class', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id:'1', // Socket id (connection id)
            name: 'Benito', // display name for the user
            room: 'Camelo' // the room the user joins
        }, {
            id:'2', // Socket id (connection id)
            name: 'Omar', // display name for the user
            room: 'Gomez' // the room the user joins
        }, {
            id:'3', // Socket id (connection id)
            name: 'Messi', // display name for the user
            room: 'Gomez' // the room the user joins
        }];
    });

    it('Should add a new user', () => {
         users = new Users();
        const user = {
            id: '666',
            name: 'Bernardo',
            room: 'Soccer fans'
        };
        users.addUser(user.id, user.name, user.room);
        expect(users.users).toInclude(user);
        // Alternatively
        // expect(users.users).toEqual([user]);
    });

    it('Should remove a user', () => {
        const count = users.users.length;
        user = users.removeUser('1');
        expect(users.users.length).toEqual(count -1);
    });

    it('Should not remove user when id is not in the list', () => {
        const id = '666';
        const count = users.users.length;
        const user = users.removeUser(id);
        expect(user).toEqual(undefined);
        expect(users.users.length).toEqual(count);
    });

    it('Should find user', () => {
        const id = '2';
        const user = users.getUser(id);
        expect(user.id).toEqual('2');
    });

    it('Should not find user', () => {
        const id = '666';
        const count = users.users.length;
        const user = users.getUser(id);
        expect(user).toEqual(undefined);
        expect(users.users.length).toEqual(count);
    });

    it('Should return user list', () => {
        const userList = users.getUserList('Gomez');
        expect(userList).toInclude('Omar', 'Messi');
    });

    it('Should return user list', () => {
        const userList = users.getUserList('Camelo');
        expect(userList).toEqual('Benito');
    });

});
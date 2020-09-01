// Object destructuring and find documents of databesa

// Object destructuring example:
const user = {
    name: 'Omar',
    age: 21
};

// Declare variable 'likes' who's value is going to be the value of the property 'likes' inside the user object.
const {name, age} = user; 

console.log(name);

console.log(age);

//const MongoClient = require('mongodb').MongoClient;
// Apply destructuring to MongoClient

const {MongoClient,
     ObjectID // Handling -id's propperties
    } = require('mongodb');  // Alternative

// Create a new instance of ObjectID

const objId = ObjectID();

console.log({objId});

const HOST = 'localhost:27017';
const DATABASE = 'TodoApp';

// Connect to MongoDB Server(server running on port localhost:27010)
MongoClient.connect(`mongodb://${HOST}/${DATABASE}`, (error, db) => {
    if (error) {
       return console.log('Unable to connect to MongoDb server')
    }
    console.log('Connected to MongoDB server');
    // Get the collection and fetch everything inside that collection everythimg into an Arrar
    db.collection('Todos').find().toArray().then((docsArrary) => {
        if (docsArrary.length == 0) {
            return console.log('There are not TODOS stored in the database');
        }
        console.log('Todos: ');
        console.log(docsArrary);
    }, (err) => {
        console.log('Unable to fetch todos', err);
        throw err;
    });


    // Fetch only completed items
    db.collection('Todos').find({
        completed: true
    }).toArray().then((docsArrary) => {
        if (docsArrary.length == 0) {
            return console.log('There are no completed todos');
        }
        console.log('Completed todos: ');
        console.log(docsArrary);
    }, (err) => {
        console.log('Unable to fetch todos', err);
        throw err;
    });

    // Fetch only Uncompleted items
    db.collection('Todos').find({
        completed: false
    }).toArray().then((docsArrary) => {
        if (docsArrary.length == 0) {
            return console.log('There are no uncompleted todos');
        }
        console.log('Uncompleted todos: ');
        console.log(docsArrary);
    }, (err) => {
        console.log('Unable to fetch uncompleted todos', err);
        throw err;
    });

    // Fetch item by Id
    db.collection('Todos').find({
        _id: new ObjectID('5f485760b3d39d1f341725c8')
    }).toArray().then((docsArrary) => {
        if (docsArrary.length == 0) {
            return console.log(`There are no todos with id: ${new ObjectID('5f485760b3d39d1f341725c8')} `);
        }
        console.log('Todos: ');
        console.log(docsArrary);
    }, (err) => {
        console.log(`Unable to fetch tpdp with id: ${new ObjectID('5f485760b3d39d1f341725c8')}`, err);
        throw err;
    });
    db.close();
});



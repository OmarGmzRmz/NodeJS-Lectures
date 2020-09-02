// Connect to data base
const MongoClient = require('mongodb').MongoClient;

const HOST = 'localhost:27017';
const DATABASE = 'TodoApp'; // If 'TodoApp' database does not exist, then the MongoDB server will create the database if and only if e try to write data

// Connect
MongoClient.connect(`mongodb://${HOST}/${DATABASE}`, (error, db) => {
    if (error) {
       return console.log('Unable to connect to MongoDb server')
    }
    console.log('Connected to MongoDB server');

    const todosColletion = db.collection('Todos');

    // deleteMany. Delete all documents that match the spicified filter

    todosColletion.deleteMany({
        title: 'Test'
    }).then((res) => {
        console.log(`Deleted ${res.deletedCount} todos`);
    }, (err) => {
        console.log('Unable to delete todos', err);
    })
    db.close();
});
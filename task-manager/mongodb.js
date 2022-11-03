// CRUD

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to the database!');
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Mohsen',
    //     age: 34
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }

    //     console.log(result);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen', 
    //         age: 28
    //     }, {
    //         name: 'Zahra', 
    //         age: 31
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents');
    //     }

    //     console.log(result.insertedIds);
    // })

    db.collection('tasks').insertMany([
        {
            description: 'walking',
            completed: true
        },
        {
            description: 'cooking',
            completed: false
        },
        {
            description: 'shopping',
            completed: true
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert documents');
        }
        console.log(result.insertedIds);
    })
})
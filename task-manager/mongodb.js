// CRUD

const { MongoClient, ObjectId, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to the database!');
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({ _id: new ObjectId('63636a1b2f682511733e4bb6') }).then(data => {
    //     if (!data) {
    //         console.log('no data');
    //     } else {
    //         console.log(data);
    //     }
    // })

    // db.collection('users').find({ age: 31 }).toArray().then(data => { console.log(data);})

    db.collection('tasks').findOne({ _id: new ObjectId('636360f8595349f8f98cb0f8')}).then(data => { console.log(data);})
    db.collection('tasks').find({ completed: false}).toArray().then(data => {console.log(data);})

})
// CRUD

const { MongoClient, ObjectId, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to the database!');
    }

    const db = client.db(databaseName)

    // db.collection('users').deleteMany({
    //     age: 22
    // }).then(result => {
    //     console.log(result.deletedCount);
    // }).catch(error => {
    //     console.log(error);
    // })

    db.collection('tasks').deleteOne({
        description: 'walking'
    }).then(result => {
        console.log(result.deletedCount);
    }).catch(error => {
        console.log(error);
    })
})
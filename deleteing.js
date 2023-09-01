const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useUnifiedTopology: true });

// Database Name
const dbName = 'task-manager';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('users');

    const deleteOne = await collection.deleteOne({
        name : 'gunther'
    })

    const TaskCollection = db.collection('tasks');

    const deleteMany = await TaskCollection.deleteMany({
        completed : true
    })

    console.log(deleteOne)
    console.log(deleteMany)


    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

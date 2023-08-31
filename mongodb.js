// CRUD operations

const { MongoClient, ObjectID } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useUnifiedTopology: true });

// const id = new ObjectID();
// console.log(typeof id);
// console.log(id.getTimestamp());
// console.log(id.id.length);
// console.log(id.toHexString());

// Database Name
const dbName = 'task-manager';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('users');


    // const data = [
    //     {
    //         name: 'vikram',
    //         age: 26,
    //     },
    //     {
    //         name: 'gunther',
    //         age: 34,
    //     }
    // ]

    // const insertMany = await collection.insertMany(data)
    // const insertOne = await collection.insertOne({
    //     _id: id,
    //     name: 'vikram',
    //     age: 26,
    // })

    // // the following code examples can be pasted here...

    // console.log(insertOne.ops)
    // // console.log(insert.ops)


    // const task = [{ description: 'task1', completed: true },
    // { description: 'task2', completed: false },
    // { description: 'task3', completed: true }];

    // const taskCollectoion = db.collection('tasks');

    // const insertTasks = await taskCollectoion.insertMany(task);


    // console.log(insertTasks)

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());




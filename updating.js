const { MongoClient , ObjectId } = require('mongodb');

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

    const id = new ObjectId("64f170ec4a2ac0901de2b107");

    const updateOne = await collection.updateOne({
        _id : id 
    },{
        $inc : {
            "age" : 1
        }
    });


    const TaskCollection = db.collection('tasks');

    const updateMany = await TaskCollection.updateMany({
        completed : false
    },{
        $set : {
            completed : true
        }
    })

    console.log(updateOne);
    console.log(updateMany);
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
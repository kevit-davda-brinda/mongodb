const { MongoClient , ObjectId } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useUnifiedTopology: true });

// Database Name
const dbName = 'task-manager';



async function main() {
    // Use connect method to connect to the server
    await client.connect();
    // console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('users');

    const user = await collection.findOne({name : 'vikram'});
    const findedUser =  await collection.find({name : 'vikram'}).toArray();
    const totalUser =  await collection.find({name : 'vikram'}).count();

    // console.log(user)
    // console.log(findedUser)
    console.log(totalUser)

    const TaskCollection = db.collection('tasks');

    const id = new ObjectId("64f0601e6c328afad5c36107");

    const findOne = await TaskCollection.findOne({_id : id})
    const findMany = await TaskCollection.find({completed:false}).count();

    console.log(findOne)
    console.log(findMany)


    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
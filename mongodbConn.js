const { MongoClient } = require('mongodb');
const fs = require('fs');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useUnifiedTopology: true });

// Database Name
const dbName = 'restaurants-data';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('restaurants');

    //docment read operation
    const data = get_data();
    console.log(data)

    // const documents = await collection.insertOne(data);

    // console.log(documents);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());


function get_data(){
    try {
        const data = fs.readFileSync('restaurants.json');
        // console.log(typeof data);

//         const restaurantData = data.split('\n').filter(Boolean).map(JSON.parse);

// // Now, restaurantData is an array containing the restaurant objects
// console.log(restaurantData);

        return data.toString();
    } catch (err) {
        // console.error(err);
        return err;
    }
}


//Write a MongoDB query to display all the documents in the collection restaurants.

// step-1 : connect to DB

const { MongoClient } = require('mongodb');
const fs = require('fs');
const async = require('hbs/lib/async');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useUnifiedTopology: true });

// Database Name
const dbName = 'restaurants-database';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('restaurants');

    // insertData(collection);

    // 1 . Write a MongoDB query to display all the documents in the collection restaurants.
    // const data = await readData(collection);
    // console.log(data);
    // console.log(data.length);

    // 2 . Write a MongoDB query to display the fields restaurant_id, name, borough, and cuisine for all the documents in the collection restaurant
    // const dataFild = collection.find({}, {_id:1, name:1, cuisine: 1, borough: 1, restaurant_id: 1});
    // console.log(dataFild)

    // 3. Write a MongoDB query to display the fields restaurant_id, name, borough, and cuisine, but exclude the field _id for all the documents in the collection restaurant.
    // const specFind = collection.find({}, {_id:0, name:1, cuisine: 1, borough: 1, restaurant_id: 1});
    // console.log(specFind);

    // 4 . Write a MongoDB query to display the fields restaurant_id, name, borough, and zip code, but exclude the field _id for all the documents in the collection restaurant.
    // const find4 = await collection.find({}, {_id:0, name:1, cuisine: 1, borough: 1, restaurant_id: 1, "address.zipcode": 1});
    // console.log(find4);

    // 5 . Write a MongoDB query to display all the restaurants which are in the borough Bronx.
    // const find5 =  await collection.find({borough : 'Bronx'}).toArray();
    // console.log(find5);
    // console.log(find5.length);

    //6 . Write a MongoDB query to display the first 5 restaurants which are in the borough Bronx.
    // const find6 =  await collection.find({borough : 'Bronx'}).limit(5).toArray();
    // console.log(find6);
    // console.log(find6.length);

    //7 . Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx.
    // const find7 =  await collection.find({borough : 'Bronx'}).limit(5).skip(5).toArray();
    // console.log(find7);
    // console.log(find7.length);grades.score

    //8 . Write a MongoDB query to find the restaurants that achieved a score of more than 90.
    // const find8 = await collection.find({ 'grades.score' : {$gt : 90}}).toArray();
    // console.log(find8);
    // console.log(find8.length);

    //9 . Write a MongoDB query to find the restaurants that achieved a score, of more than 80 but less than 100.
    // const find9 = await collection.find({ 'grades.score' : {$gt : 80 , $lt : 100}}).toArray();
    // console.log(find9);
    // console.log(find9.length);

    // 10 . Write a MongoDB query to find the restaurants which locate in a latitude value less than -95.754168.
    // const find10 = await collection.find({ 'address.coord' : { $lt : -95.754168}}).toArray();
    // console.log(find10);
    // console.log(find10.length);

    // 11 . Write a MongoDB query to find the restaurants that do not prepare any cuisine of 'American' and whose grade score is more than 70 and latitude less than -65.754168.
    // const find11 = await collection.find({$and : [{"cuisine" : {$ne : "American "}}, {"address.coord.0" : {$lt : -65.754168}}, {"grades.score" : {$gt : 70}}]}).toArray();
    // console.log(find11);
    // console.log(find11.length);

    // 12 . Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and achieved a score of more than 70 and located in the longitude less than -65.754168. Note: Do this query without using $and operator.
    

    // 13 . Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American ' and achieved a grade point 'A' not belonging to the borough Brooklyn. The document must be displayed according to the cuisine in descending order.
    // const find13 = await collection.find({$and : [{"cuisine" : {$ne : "American "}}, {'grades.grade' : 'A'} , {'borough' : {$ne : 'Brooklyn'}}]}).toArray();

}

main()
    .then(() => console.log('done.'))
    .catch(console.error)
    .finally(() => client.close());


async function insertData(collection) {
    try {
        // Read JSON data from file and parse into an array of objects
        const restaurantData = get_data();

        // Insert data into the collection
        const result = await collection.insertMany(restaurantData);
        console.log(`Inserted ${result.insertedCount} documents`);
    } catch (error) {
        console.error(error);
    } finally {
        client.close();
    }
}

async function readData(collection){
    const data = await collection.find().toArray();

    return data;
}

function get_data() {
    try {
        const data = fs.readFileSync('restaurants.json', 'utf8');
        const lines = data.trim().split('\n');
        const restaurantData = lines.map(JSON.parse);
        return restaurantData;
    } catch (err) {
        return err;
    }
}


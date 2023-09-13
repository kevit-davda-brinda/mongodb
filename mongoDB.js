//Write a MongoDB query to display all the documents in the collection restaurants.

// step-1 : connect to DB

const { MongoClient , ObjectId} = require('mongodb');
const fs = require('fs');
const async = require('hbs/lib/async');
const { query } = require('express');

// Connection URL
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

// Database Name
const dbName = 'restaurants-database';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('restaurants');

    // await insertData(collection);

    // 1 . Write a MongoDB query to display all the documents in the collection restaurants.
    // const data = await readData(collection);
    // console.log(data);
    // console.log(data.length);

    // 2 . Write a MongoDB query to display the fields restaurant_id, name, borough, and cuisine for all the documents in the collection restaurant
    // const dataFild = collection.find ({},{_id:1, name:1, cuisine: 1, borough: 1, restaurant_id: 1});
    // const find2 = await dataFild.toArray();
    // console.log(find2)

    // 3. Write a MongoDB query to display the fields restaurant_id, name, borough, and cuisine, but exclude the field _id for all the documents in the collection restaurant.
    // const projection3 = {_id:0, name:1, cuisine: 1, borough: 1, restaurant_id: 1};
    // const find3 = await collection.find({},{projection : projection3}).toArray();
    // console.log(find3);

    // 4 . Write a MongoDB query to display the fields restaurant_id, name, borough, and zip code, but exclude the field _id for all the documents in the collection restaurant.
    // const projection4 = {_id:0, name:1, cuisine: 1, borough: 1, restaurant_id: 1, "address.zipcode": 1};
    // const find4 = await collection.find({},{ projection : projection4 }).toArray();
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
    // const find12 = await collection.find({
    //     "cuisine": { "$ne": "American" },
    //     "grades.score": { "$gt": 70 },
    //     "address.coord.1": { "$lt": -65.754168 }
    // }).toArray();
    // console.log(find12);
    // console.log(find12.length);


    // 13 . Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American ' and achieved a grade point 'A' not belonging to the borough Brooklyn. The document must be displayed according to the cuisine in descending order.
    // const find13 = await collection.find({$and : [{"cuisine" : {$ne : "American "}}, {'grades.grade' : 'A'} , {'borough' : {$ne : 'Brooklyn'}}]}).sort( { "cuisine": -1 } ).toArray();
    // console.log(find13);
    // console.log(find13.length);

    // 14 . Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which contain 'Wil' as the first three letters of their name.
    // const filter14 = {"name" : { $regex: /^Wil.*/}}
    // const projection14 = {'restaurant Id':1,'name':1,'borough':1,'cuisine':1,'_id':0};
    // const fild14 = collection.find(filter14,{ projection : projection14});
    // const find14 = await fild14.toArray();;
    // console.log(find14);
    // console.log(find14.length);

    // 15 . Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as the last three letters of their name.
    // const filter15 = {"name" : { $regex: /.*ces$/}};
    // const projection15 = {_id:0, restaurant_id:1, name:1, borough:1, cuisine:1};
    // const fild15 =  collection.find( filter15, {projection : projection15} )
    // const find15 = await fild15.toArray();
    // console.log(find15);
    // console.log(find15.length);

    // 16 . Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which contain 'Reg' as three letters somewhere in their name.
    // const filter16 = { "name": { $regex: /Reg/ } };
    // const projection16 = { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 };
    // const fild16 = collection.find(filter16, {projection : projection16} );
    // const find16 = await fild16.toArray();;
    // console.log(find16);
    // console.log(find16.length);

    // 17 . Write a MongoDB query to find the restaurants which belong to the borough Bronx and prepared either American or Chinese dishes.
    // const find17 = await collection.find({$and : [{'borough' : 'Bronx'} , {$or : [{'cuisine' : 'American'} , {'cuisine' : 'Chinese'}]}]}).toArray();
    // console.log(find17);
    // console.log(find17.length);

    // 18 . Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which belong to the borough Staten Island or Queens or Bronxor Brooklyn.
    // const filter18 = {'borough' : { $in : ['Staten Island' , 'Queens' , 'Bronxor Brooklyn']}};
    // const projection18 = {_id:0, restaurant_id:1, name:1, borough:1, cuisine:1};
    // const fild18 = collection.find(filter18, { projection : projection18})
    // const find18 = await fild18.toArray();
    // console.log(find18);
    // console.log(find18.length);

    // 19 . Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which do not belong to the borough Staten Island or Queens, or Bronxor Brooklyn.
    // const filter19 = {'borough' : { $ne : { $in : ['Staten Island' , 'Queens' , 'Bronxor Brooklyn']}}};
    // const projection19 = {_id:0, restaurant_id:1, name:1, borough:1, cuisine:1};
    // const filed19 =  collection.find(filter19, { projection : projection19});
    // const find19 = await filed19.toArray();
    // console.log(find19);
    // console.log(find19.length);

    // 20 . Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which achieved a score that is not more than 10.
    // const filter20 = {
    //     'grades.score': {
    //       '$lt': 10
    //     }
    //   };
    //   const projection20= {
    //     '_id': 0, 
    //     'restaurant_id': 1, 
    //     'name': 1, 
    //     'borough': 1, 
    //     'cuisine': 1
    //   };
      
    // const fild20 =  collection.find(filter20, { projection : projection20 });
    // const find20 = await fild20.toArray();
    // console.log(find20);
    // console.log(find20.length);

    // 21 . Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which prepared dishes except 'American' and 'Chinees' or the restaurant's name begins with the letter 'Wil'.  
    // const filter21 = { $and: [{ "name": { $regex: /^Wil*./ } }, { 'cuisine': { $ne: { $in: ['American', 'Chinees'] } } }] };
    // const projection21 = { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 };
    // const fild21 = collection.find( filter21 , { projection : projection21} )
    // const find21 = await fild21.toArray();
    // console.log(find21);
    // console.log(find21.length);

    // 22 . Write a MongoDB query to find the restaurant Id, name, and grades for those restaurants which achieved a grade of "A" and scored 11 on an ISODate "2014-08-11T00:00:00Z" among many survey dates.
    // const filter22 = {'grades' :  {$elemMatch :  { "date": ISODate("2014-08-11T00:00:00Z"), "grade":"A", "score":11}} };
    // const projection22 = { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 };
    // const fild22 =  collection.find(filter22, {projection : projection22});
    // const find22 =  await fild22.toArray();
    // console.log(find22);
    // console.log(find22.length);

    // 23 . Write a MongoDB query to find the restaurant Id, name, and grades for those restaurants where the 2nd element of the grades array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z".
    // const filter23 = {"grades.1" : {$elemMatch :  { "date": ISODate("2014-08-11T00:00:00Z"), "grade":"A", "score":9}}};
    // const projection23 = { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 };
    // const find23 = await collection.find( filter23, {projection : projection23} ).toArray();
    // console.log(find23);
    // console.log(find23.length);

    // 24 . Write a MongoDB query to find the restaurant Id, name, address, and geographical location for those restaurants where the 2nd element of the coord array contains a value that is more than 42 and up to 52.
    // const filter24 = {'address.coord.1' : {$gt : 42 , $lte : 52 }};
    // const projection24 = { _id: 0, restaurant_id: 1, name: 1, address: 1 };
    // const fild24 =  collection.find( filter24 , { projection : projection24});
    // const find24 =  await fild24.toArray();
    // console.log(find24);
    // console.log(find24.length);

    // 25 . Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.
    // const projection25 = {_id:0, name:1};
    // const fild25 =  collection.find({},{ projection : projection25}).sort({"name":1});
    // const find25 = await fild25.toArray();
    // console.log(find25);
    // console.log(find25.length);

    // 26 . Write a MongoDB query to arrange the name of the restaurants in descending along with all the columns
    // const projection26 = {_id:0, name:1};
    // const fild26 =  collection.find({},{ projection : projection26}).sort({"name":-1});
    // const find26 = await fild26.toArray();
    // console.log(find26);
    // console.log(find26.length);

    // 27 . Write a MongoDB query to arrange the name of the cuisine in ascending order and for that same cuisine borough should be in descending order.
    // const projection27 = {_id:0, cuisine:1, borough:1};
    // const fild27 = collection.find({},{ projection : projection27} ).sort({cuisine: 1, borough: -1})
    // const find27 = await fild27.toArray();
    // console.log(find27);
    // console.log(find27.length);

    // 28 . Write a MongoDB query to know whether all the addresses contains the street or not.
    // const find28 = await collection.find({'address.street' : {$exists : true}}).toArray();
    // console.log(find28);
    // console.log(find28.length);

    // 29 . Write a MongoDB query which will select all documents in the restaurants collection where the coord field value is Double.
    // const find29 = await collection.find({}).toArray();
    // console.log(find29);
    // console.log(find29.length);

    // 30 . Write a MongoDB query which will select the restaurant Id, name and grades for those restaurants which returns 0 as a remainder after dividing the score by 7.
    // const filter30 = {'grades.score' : { $mod: [ 7, 0 ] }};
    // const projection30 = { '_id' : 0,'restaurant_id' : 1 , 'name' : 1 , 'grades' : 1};
    // const fild30 = collection.find( filter30 , { projection : projection30})
    // const find30 = await fild30.toArray();
    // console.log(find30);
    // console.log(find30.length);

    // 31 . Write a MongoDB query to find the restaurant name, borough, longitude and attitude and cuisine for those restaurants which contains 'mon' as three letters somewhere in its name.
    // const filter31 = {'name' : {$regex : /.*mon*./}};
    // const projection31 ={'_id':0,'name':1 , 'borough' : 1 , 'name':1 , 'address.coord' : 1};
    // const fild31 = collection.find(  filter31 , { projection : projection31} );
    // const find31 = await fild31.toArray();
    // console.log(find31);
    // console.log(find31.length);

    // 32 .Write a MongoDB query to find the restaurant name, borough, longitude and latitude and cuisine for those restaurants which contain 'Mad' as first three letters of its name.  
    // const filter32 = {'name': {$regex : /^Mad*./}};
    // const projection32 = { '_id':0 , 'name':1 , 'borough' : 1 , 'address.coord' : 1 , 'cuisine' : 1};
    // const find32 = await collection.find( filter32, { projection : projection32} ).toArray();
    // console.log(find32);
    // console.log(find32.length);


    return 'done.'
}




async function insertData(collection) {
    try {
        // Read JSON data from file and parse into an array of objects
        const restaurantData = get_data();

        console.log(Array.isArray(restaurantData));

        // Insert data into the collection
        const result = await collection.insertMany(restaurantData);
        console.log(`Inserted ${result.insertedCount} documents`);
    } catch (error) {
        console.error(error);
    } finally {
        client.close();
    }
}

async function readData(collection) {
    const data = await collection.find().toArray();

    return data;
}

function get_data() {
    try {

        const data = fs.readFileSync('restaurants.json', 'utf8');
        const lines = data.trim().split('\n');
        const restaurantData = lines.map(JSON.parse);
        console.log(restaurantData);
        return restaurantData;
    } catch (err) {
        return err;
    }
}

main()
    .then(() => console.log('done.'))
    .catch(console.error)
    // .finally(() => client.close());
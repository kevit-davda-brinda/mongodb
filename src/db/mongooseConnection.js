const mongoose = require('mongoose')
const validator = require('validator');

const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'task-manager-api';

async function main()  {
    const client = await mongoose.connect(url + '/' + dbName,{
        serverSelectionTimeoutMS: 30000, // Increase the timeout to 30 seconds
        // useUnifiedTopology: true,
        // useNewUrlParser: true,
        // useCreateIndex: true, //make this true
        // autoIndex: true, //make this also true
      });

      return 'done'
}

main()
    .then(console.log)
    .catch(console.error)
const mongoose = require('mongoose');
const { boolean } = require('yargs');

const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'task-manager-api';

async function main() {
    const client = await mongoose.connect(url + '/' + dbName);

    const taskModel = mongoose.model('Tasks', {
        description: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            default: false,
        },
    })

    const task1 = new taskModel({
        description: 'testing task'
    });

    console.log(task1)

    const saveData = await task1.save();


    return 'done.'
}

main()
    .then(console.log)
    .catch(console.error)



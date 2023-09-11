//adding conection code with mongoose.
require('../src/db/mongooseConnection.js');
//getting model/schema for task
const task = require('../src/models/task.js');

// task.findByIdAndDelete('64f1e0ea1a09185f2a7df50e')
// .then((RemovedData)=>{
//     console.log(RemovedData);

//     return task.countDocuments({completed : false})
// })
// .then((countIncompleteTask)=>{
//     console.log(countIncompleteTask)
// })
// .catch(console.error)

const findByIdAndDelete = async (id)=>{
    const task1 = task.findByIdAndDelete(id);
    const count = task.countDocuments({completed : false})

    return count;
}

findByIdAndDelete('64f1e0ea1a09185f2a7df50e')
.then((data)=>console.log(data))
.catch((e)=>console.error(e));

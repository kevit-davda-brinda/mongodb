const express = require('express');
require('./db/mongooseConnection.js')

const userRouter = require('./routers/user.js');
const taskRouter = require('./routers/task.js');

const app = express();
const port = 3000;

//middelwar function please call the next function 
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET request disable by user');
//     }
//     else {
//         next();
//     }
// })

//new middelware that site is under maintainnace
// app.use((req, res, next) => {
//     res.status(503).send('site is under maintainance');
// })


app.use(express.json())

app.use(userRouter) // use user route
app.use(taskRouter) // use task route




app.listen(port, () => {
    console.log('Srver is running at port ' + port);
})

// const pat = {
//     "name":'kity'
// } 

// pat.toJSON = function(){
//     console.log(this);

//     return {};
// }

// console.log(JSON.stringify(pat))

const Task = require('./models/task.js');
const User = require('./models/user.js');

// const main = async ()=>{
//     // const task = await Task.findById('64feb9ae89ae4b992eb9422f');

//     // await task.populate('owner').execPopulate()// TypeError: task.populate(...).execPopulate is not a function

//     // console.log(task.owner);

//     const user = await User.findById('64feb9a789ae4b992eb94227');
//     await user.populate('tasks');
//     console.log(user.tasks)
// }

// main()





//adding conection code with mongoose.
require('../src/db/mongooseConnection.js');
//getting model/schema for user
const User = require('../src/models/user.js');

// object ID = 64f184090a89bf62467871a9


    // const userDataUpdate = User.findByIdAndUpdate('64f18469be3f946e9332fd1b',{ age : 1})
    // .then((data)=>{
    //     console.log(data);

    //     return User.count({age:1});
    // })
    // .then((count)=>{
    //     console.log(count);
    // })
    // .catch((e)=>console.error(e))

//update the age and then count it
const UpdateAgeAndCount = async (id,age)=>{
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age })

    return count;
}

UpdateAgeAndCount('64f18469be3f946e9332fd1b',2)
.then((count)=>console.log(count))
.catch(console.error)

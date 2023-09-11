const jwt = require('jsonwebtoken');

const myFunction = async () => {

    const token = jwt.sign({ _id : 'ID1234'} , 'thisIsSeckretKey' , { expiresIn : '1 second'})
    console.log(token);

    const payload = jwt.verify(token , 'thisIsSeckretKey')
    console.log(payload)
}

myFunction();
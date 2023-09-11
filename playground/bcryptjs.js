const bcrypt = require('bcryptjs');

async function securePassword(password){
    
    const hashPass = await bcrypt.hash(password, 8);
    console.log(hashPass);

    const isMatch = await bcrypt.compare(password, hashPass);
    console.log(isMatch);

    return hashPass;
}

securePassword('not_bacon').then(console.log);

//compare 
// const hash = securePassword('not_bacon');

// console.log();
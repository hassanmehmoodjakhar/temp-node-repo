const os = require('os');

const user =  os.userInfo(); //info about current user
console.log(user);

console.log(`Uptime ${os.uptime()} seconds`); //System Uptime

const currOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    
};
console.log(currOS);
const os = require('os')

//info
const user = os.userInfo()
console.log(user)

//system uptime 
console.log(`The System Uptime Is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs)
const os = require('os')
console.log(os.userInfo())

console.log(`System uptime: ${os.uptime} seconds \n`)
 

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log('OS details')
console.log(currentOS)
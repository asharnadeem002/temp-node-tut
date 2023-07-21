const {readFileSync, writeFileSync} = require('fs')
console.log('Start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first, '\n',second )


writeFileSync('./content/result-sync.txt', `Here is the result: \n${first}\n${second}\n`, {flag:'a'})
console.log('Done!!')
console.log('Starting The next Task')
const {readFile, writeFile} = require('fs')
console.log('Start')
readFile('./content/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log('Error!!\n')
        return;
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log('Error!!\n')
            return;
        }
        const second = result
        writeFile('./content/result-async.txt', `Here is the result:\n${first}\n${second}\n`, {flag: 'a'}, (err, result) => {
            if(err){
                console.log('Error!\n')
                return
            }
            //console.log(result)
            console.log('Done!!')
        })
    })
    //console.log(`Here is the result:\n${first}\n${second}\n`)
})
console.log('Staring the next task')
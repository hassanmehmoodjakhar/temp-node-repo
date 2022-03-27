const {readFile, writeFile} = require('fs');

//Callback Functions
readFile('./content/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err);
        return;
    } //if we don't provide the utf-8 coding then buffer error value will be displayed
    const first = result;

    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err);
            return;
        } //if we don't provide the utf-8 coding then buffer error value will be displayed
        const second = result;

        writeFile('./content/result_async.txt', `The result is: ${first},${second}`, (err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        })
    })
    
})
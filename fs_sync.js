//it contains synchronous and asynchronous methods
 
//this is another method of using the properties of modules
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8'); //read the already made files
console.log(first, second);

//It will make a new file if the file is not present and overwrite the other files text files
writeFileSync('./content/result.txt', `The result is: ${first},${second}`,{flag:'a',_flag:'b'}); //flag to append values

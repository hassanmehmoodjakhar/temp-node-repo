const path = require('path');

console.log(path.sep); //path separator which is forward slash /

const filePath = path.join('/content','sub-folder', 'test.txt'); //path of folders and files
console.log(filePath);

const base = path.basename(filePath);  //most internal file or folder is base
console.log(base);

const absolute = path.resolve(__dirname, 'content','sub-folder', 'test.txt'); //path of folders and files with directory
console.log(absolute);
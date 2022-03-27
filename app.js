// const fullName = require('./var-obj');
// const greetings = require('./func');
// const data = require('./arr-obj');
// require('./mind-grenade'); //This is require function mind grenade


//console.log(fullName.firstName + fullName.lastName);
//console.log(greetings());
//console.log(data.mySelf);
//console.log(data.items.length);

const _ = require('lodash');
const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);


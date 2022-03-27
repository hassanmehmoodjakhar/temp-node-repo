//We can directly write module exports without const

module.exports.items = ['item1','item2'];
const Person = {
    name: 'Hassan Mehmood',
};

module.exports.mySelf = Person;
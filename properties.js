const bottle = { color: 'Yellow', hold: 'water', price: 50, isCleaned: true };
// color=key: 'yellow'=value 

//Getting All THe Properties Names
const keys = Object.keys(bottle);
// console.log(keys);

//Get all value
const values = Object.values(bottle);
// console.log(values);

const pairs = Object.entries(bottle);
// console.log(pairs);

//Delete Protected for an Object
// Object.seal(bottle);

//prtect delete update everything
Object.freeze(bottle);
bottle.price = 100;


//Delete property from an object
delete bottle.isCleaned;
console.log(bottle);
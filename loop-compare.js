const bottle = {
    color: 'Yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};

/*
 for(let i=0; i<10, i++) 
for(const name of numbers){} // array
for(const prop in student){} // Object

*/
for (const prop in bottle) {
    // console.log(prop, bottle[prop]);
}

const keys = Object.keys(bottle);
// console.log(keys)
for (const prop of keys) {
    console.log(prop, bottle[prop]);
}

// Advanced
const entries = Object.entries(bottle);
console.log(entries);
for (const [key, value] in Object.entries(bottle)) {

}
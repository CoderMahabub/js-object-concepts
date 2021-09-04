// 1. Literal
const person = { name: 'Sakib', age: 34, job: 'crecketer' };
// console.log(person);

// 2. Constructor
const person2 = new Object();
// console.log(person2);

// 3. 
// const human = Object.create(null);
const human = Object.create(student);
// console.log(human.job);

class People {
    constructor(name, age) {
        this.name = name;
        this.age;
    }
}
const peop = new People('manus', 12);
// console.log(peop);


// function
function Manus(name) {
    this.name = name;
}
const man = new Manus('Kader')
console.log(man);
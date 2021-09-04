const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;
if (first === third) {
    // console.log('Object are equla');
} else {
    // console.log('Object are not equla');
}
const first2 = { a: 1, b: 2 };
const second2 = { a: 1, a: 1 };
console.log(JSON.stringify(first));
console.log(JSON.stringify(second));
if (JSON.stringify(first2) === JSON.stringify(second2)) {
    console.log('Objects are equal');
}

function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[porp]) {
            return true;
        }
    }
}
const isEqual = compareObjects(first2, second2);
console.log(isEqual);
// merge two objects

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = { ...obj1, ...obj2 }; 

console.table(obj1);
console.table(obj2);
console.table(mergedObj);
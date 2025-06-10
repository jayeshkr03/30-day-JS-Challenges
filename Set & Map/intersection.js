// // Find intersection of two sets

const arr1 = [3,5,62,7,6,8,0,1];
const arr2 = [2,5,7,9,0, -1];

const intersection = arr1.filter( item => arr2.includes(item));

console.log(intersection);
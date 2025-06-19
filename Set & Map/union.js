// Union of two arrays

const arr1 = [2,3,5,6];
const arr2 = [4,6,7,9,10,1];

const union = new Set([...arr1], [...arr2]);
const unionArr = [...union];

console.log(unionArr);
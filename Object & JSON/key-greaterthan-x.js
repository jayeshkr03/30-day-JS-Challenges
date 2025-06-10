// key > x

const myObject = {
  a: 10,
  b: 5,
  c: 12,
  d: 7
};
const x = 8;

const keysGreaterThanX = Object.keys(myObject).filter(key => myObject[key] > x);
console.log(keysGreaterThanX); 
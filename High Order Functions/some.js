// Find if array contains any -ve number using some()

const num = [8, 11, 2, -10, -6, 3];
const negativeCheck = num.some(function(n) {return n < 0});
console.log(negativeCheck);
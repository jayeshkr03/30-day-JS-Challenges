// check if the whole array is positive or not using every()

const numbers = [3, 6, 7 , -2, 5];
const ifPositive = numbers.every(function(n) { return n > 0});
console.log(ifPositive);
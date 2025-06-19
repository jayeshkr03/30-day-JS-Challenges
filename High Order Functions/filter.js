// Filter even numbers using filter()

const numbers = [ 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNum = numbers.filter(function(n) { return n % 2 === 0 });

console.log(evenNum);
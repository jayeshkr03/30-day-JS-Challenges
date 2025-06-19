// Chain map() and filter()

const num = [8, 11, 2, -10, -6, 3];
const chainedMapFilter = num.filter(function(n) { return n % 2 === 0 }).map(function(n) { return n ** 2});
console.log(chainedMapFilter);

// > 10 using find()

const num = [0, -10, 4, 7, 11, 9];
const greaterVal = num.find( function(n) {return n > 10} );
console.log(greaterVal);
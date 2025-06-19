// Remove duplicates using set()

const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbersSet = new Set(numbersWithDuplicates);
const uniqueNumbersArray = [...uniqueNumbersSet];

console.log(uniqueNumbersArray);

function findMissingNumbers(arr) {
    let missingNumbers = [];
    let maxNumber = Math.max(...arr);
    
    for (let i = 1; i <= maxNumber; i++) {
        if (!arr.includes(i)) {
            missingNumbers.push(i);
        }
    }

    return missingNumbers;
}

let numbers = [3, 7, 1, 2, 11, 8, 4, 5]; 
let missing = findMissingNumbers(numbers);
console.log("Missing numbers:", missing);
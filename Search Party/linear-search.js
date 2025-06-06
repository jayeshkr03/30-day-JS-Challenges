function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return -1 if not found
        }
    }
    return -1; // Return -1 if not found
}

const numbers = [10, 3, 5, 2, 6, 9, 7, 8, 4, 1];

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Take user input and search for the number
rl.question('Enter the number to search for: ', (input) => {
    const target = Number(input);
    const index = linearSearch(numbers, target);
    console.log(`Element ${target} found at index: ${index}`); // print answer
    rl.close();
});

// Example output:
// Enter the number to search for: 4
// Element 4 found at index: 8
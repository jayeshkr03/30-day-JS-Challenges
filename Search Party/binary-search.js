function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    // Binary search loop
    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Middle index
        if (arr[mid] === target) {
            return mid; // Target found
        } else if (arr[mid] < target) {
            left = mid + 1; // Search right half
        } else {
            right = mid - 1; // Search left half
        }
    }
    return -1; // Target not found
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Take user input and search
rl.question('Enter the number to search for: ', (input) => {
    const target = Number(input);
    const index = binarySearch(numbers, target);
    if (index !== -1) {
        console.log(`Element ${target} found at index: ${index}`);
    } else {
        console.log(`Element ${target} not found in the array.`);
    }
    rl.close();
});

// Output: 
// >>>  Enter the number to search for: 4
//      Element 4 found at index: 3

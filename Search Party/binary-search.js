function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; 
        } else if (arr[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }
    return -1; 
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
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


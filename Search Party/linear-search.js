function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const numbers = [10, 3, 5, 2, 6, 9, 7, 8, 4, 1];

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the number to search for: ', (input) => {
    const target = Number(input);
    const index = linearSearch(numbers, target);
    console.log(`Element ${target} found at index: ${index}`);
    rl.close();
});
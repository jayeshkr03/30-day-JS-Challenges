// Function to find the first and last index of a target in a sorted array
function findFirstAndLastOccurrence(arr, target) {
    let first = -1;
    let last = -1;

    // Find first occurrence
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            first = i;
            break; // Stop at the first match
        }
    }

    // Find last occurrence
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === target) {
            last = i;
            break; // Stop at the last match
        }
    }

    return { first, last };
}

const sortedArray = [1, 2, 2, 3, 4, 4, 5, 6];
const target = 4;
const result = findFirstAndLastOccurrence(sortedArray, target);

if (result.first !== -1 && result.last !== -1) {
    console.log(`First occurrence of ${target} is at index: ${result.first}`);
    console.log(`Last occurrence of ${target} is at index: ${result.last}`);
} else {
    console.log(`Element ${target} not found in the array.`);
}

// Output:
// First occurrence of 4 is at index: 4
// Last occurrence of 4 is at index: 5
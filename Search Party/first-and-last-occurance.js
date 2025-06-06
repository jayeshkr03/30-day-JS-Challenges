function findFirstAndLastOccurrence(arr, target) {
    let first = -1;
    let last = -1;

    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            first = mid;
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    left = 0;
    right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            last = mid;
            left = mid + 1; 
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
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
}
else {
    console.log(`Element ${target} not found in the array.`);
}


// Sorted array check using Recursion

function isArraySortedRecursive(arr, index = 0) {
  if (index >= arr.length - 1) {
    return true;
  }
  if (arr[index] > arr[index + 1]) {
    return false;
  }
  return isArraySortedRecursive(arr, index + 1);
}

const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [1, 3, 2, 4, 5];

console.log(isArraySortedRecursive(sortedArray));
console.log(isArraySortedRecursive(unsortedArray));

// Output:
// true
// false
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array is already sorted
    }

    const pivot = arr[arr.length - 1]; // Choose last element as pivot
    const left = [];
    const right = [];

    // Partition the array into left (less than pivot) and right (greater or equal)
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort left and right, then combine with pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array: " + quickSort(array));

// Output: Sorted array: 11,12,22,25,34,64,90
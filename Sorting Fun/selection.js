function selectionSort(arr) {
    let n = arr.length;

    // Move the boundary of the unsorted subarray
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; // Assume the current position has the minimum
        // Find the actual minimum in the unsorted part
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update if a smaller element is found
            }
        }
        // Swap the found minimum with the first element of the unsorted part
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr; // Return the sorted array
}

const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array: " + selectionSort(array));

// Output: Sorted array: 11,12,22,25,34,64,90
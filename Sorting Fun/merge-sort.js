function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array is already sorted
    }

    const mid = Math.floor(arr.length / 2); // Find the middle index
    const left = mergeSort(arr.slice(0, mid)); // Sort left half
    const right = mergeSort(arr.slice(mid));   // Sort right half

    return merge(left, right); // Merge sorted halves
}

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    // Compare elements from left and right arrays
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    // Add remaining elements
    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log("Sorted array: " + mergeSort([64, -129, 25, 12, -22, 11, 90]));

// Output: Sorted array: -129,-22,11,12,25,64,90
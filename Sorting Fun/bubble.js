function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false; // Track if any swap happens in this pass
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) { // If current item is bigger than next
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap them
                swapped = true; // Mark that a swap happened
            }
        }
        n--; // Reduce the range for next pass (last element is sorted)
    } while (swapped); // Repeat if any swap happened

    return arr; // Return sorted array
}

const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array: " + bubbleSort(array));

// Output: Sorted array: 11,12,22,25,34,64,90

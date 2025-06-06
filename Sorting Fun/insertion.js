function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i]; // Current element to insert
        let j = i - 1;

        // Move elements greater than key to one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key; // Insert key at correct position
    }

    return arr; // Return sorted array
}

const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array: " + insertionSort(array)); 

// Output: Sorted array: 11,12,22,25,34,64,90

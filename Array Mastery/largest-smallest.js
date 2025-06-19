function findLargestAndSmallest(arr) {
    if (arr.length === 0) {
        return { largest: null, smallest: null };
    }

    let largest = arr[0];
    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return { largest, smallest };
}

let numbers = [-10, -20, -5, 0, 4, 7, -30, -15, -25];

const result = findLargestAndSmallest(numbers);
console.log("Largest number:", result.largest);
console.log("Smallest number:", result.smallest);

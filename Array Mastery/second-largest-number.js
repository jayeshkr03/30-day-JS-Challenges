// find second largest number in an array using a single loop
function findSecondLargest(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements to find the second largest
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest === -Infinity ? null : secondLargest;
}
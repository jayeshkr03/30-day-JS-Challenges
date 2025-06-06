function searchInRotatedArray(arr, target) {    
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; 
        }

        if (arr[left] <= arr[mid]) {
            if (arr[left] <= target && target < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else { 
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}

const rotatedArray = [4, 5, 6, 7, 0, 1, 2];
const target = 7;
const index = searchInRotatedArray(rotatedArray, target);
if (index !== -1) {
    console.log(`Element ${target} found at index: ${index}`);
}
else {
    console.log(`Element ${target} not found in the array.`);
}

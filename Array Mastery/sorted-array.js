function isAscending(arr) {
    if (arr.length < 2) {
        return true; 
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false; 
        }
    }

    return true;
}

function isDescending(arr) {
    if (arr.length < 2) {
        return true; 
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            return false; 
        }
    }

    return true;
}

// isAscending
let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 3, 2, 4, 5];
console.log("Ascending order check: ", isAscending(array1)); 
console.log("Ascending order check: ", isAscending(array2)); 

// isDescending
let array3 = [5, 4, 3, 2, 1]; 
let array4 = [5, 3, 4, 2, 1];
console.log("Descending order check: ", isDescending(array3));
console.log("Descending order check: ", isDescending(array4));
function rotateArray(arr, k) {  
    if (arr.length === 0 || k <= 0) {
        return arr;
    }

    k = k % arr.length;
    let n = arr.length;

    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);

    return arr;
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

let myArray = [1, 2, 3, 4, 5];
let k = 2;
console.log("Original array:", myArray);
let rotatedArray = rotateArray(myArray, k);
console.log("Array after rotating by", k, "positions:", rotatedArray);
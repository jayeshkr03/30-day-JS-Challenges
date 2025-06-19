// Peak element finder in array

function peakElement(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let left = true;
        let right = true;

        // Check for element to the left
        if (i > 0 && arr[i] <= arr[i - 1]) 
            left = false;

        // Check for element to the right
        if (i < n - 1 && arr[i] <= arr[i + 1]) 
            right = false;

        // If arr[i] is greater than its left as well as
        // its right element, return its index
        if (left && right) {
            return i;
        }
    }
}

let arr = [1, 2, 4, 5, 7, 8, 3];
console.log(peakElement(arr));

// Output: 
// 5
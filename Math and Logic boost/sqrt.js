// Function to calculate the integer square root of a number using binary search
function sqrt(num) {
    if (num < 0) return "No square root for negative numbers"; // Negative numbers don't have real square roots
    if (num === 0 || num === 1) return num; // Square root of 0 or 1 is the number itself

    let left = 0, right = num, ans = 0;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // Find the middle value
        if (mid * mid === num) return mid; // If mid*mid is num, mid is the square root
        if (mid * mid < num) {
            left = mid + 1; // Move right if mid*mid is less than num
            ans = mid;      // Store the last mid value
        } else {
            right = mid - 1; // Move left if mid*mid is greater than num
        }
    }
    return ans; // Return the integer part of the square root
}

console.log("Square root of 16: " + sqrt(16)); 

// Output: Square root of 16: 4
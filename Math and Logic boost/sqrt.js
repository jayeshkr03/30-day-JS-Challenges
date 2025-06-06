// Function to calc square root of a number
function sqrt(num) {
    if (num < 0) return "No square root for negative numbers";
    if (num === 0 || num === 1) return num; // 
    let left = 0, right = num, ans = 0;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid === num) return mid;
        if (mid * mid < num) {
            left = mid + 1;
            ans = mid;
        } else {
            right = mid - 1;
        }
    }
    return ans;
}

console.log("Square root of 16: " + sqrt(16));


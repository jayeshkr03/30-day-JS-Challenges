function sqrt(num) {
    if (num < 0) {
        return "Negative numbers cannot have a square root";
    }
    if (num === 0 || num === 1) {
        return num.toString();
    }

    let left = 0;
    let right = num;
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        const square = mid * mid;

        if (square === num) {
            return mid.toString();
        } else if (square < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right.toString();
}

console.log("Square root of 16: " + sqrt(16)); 


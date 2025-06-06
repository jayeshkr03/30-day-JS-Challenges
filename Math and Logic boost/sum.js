function sumOfDigits(num) {
    if (num < 0) {
        return "Negative numbers cannot have their digits summed"; // Handle negatives
     }
    if (num === 0) {
        return "0"; // Handle zero
     }

    let sum = 0;
    while (num > 0) {
        sum += num % 10; // Add last digit
        num = Math.floor(num / 10); // Remove last digit
    }
    return sum;
}

console.log("Sum of digits of 12345: " + sumOfDigits(12345));

// Output: Sum of digits of 12345: 15

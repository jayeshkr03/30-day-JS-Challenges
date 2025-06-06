// Function to check if a number is an Armstrong number
function isArmstrongNumber(num) {
    if (num < 0) return "Negative numbers cannot be Armstrong numbers"; // Armstrong numbers are non-negative integers

    const digits = num.toString().split('').map(Number); // Convert number to an array of digits
    const numDigits = digits.length; // Count the number of digits in the number
    // Calculate the sum of each digit raised to the power of the number of digits
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, numDigits), 0); // Use reduce function to sum the powered digits

    return sum === num ? "Armstrong number" : "Not an Armstrong number"; // Check if the sum equals the original number
}

console.log(isArmstrongNumber(153)); 
console.log(isArmstrongNumber(123)); 

//Output:
// Armstrong number
// Not an Armstrong number
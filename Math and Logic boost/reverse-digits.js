// Function to reverse the digits of a positive integer
function reverseDigits(num) {
    if (num < 0) {
        return "Negative numbers cannot be reversed";
    }
    if (num === 0) {
        return "0";
    }

    let reversed = 0;
    while (num > 0) {
        const digit = num % 10; // Get the last digit of the number
        reversed = reversed * 10 + digit; // Append the digit to the reversed number
        num = Math.floor(num / 10); // Remove the last digit from the number
    }
    return reversed;
}

console.log("Reversed digits of 12345: " + reverseDigits(12345)); 

// Output: Reversed digits of 12345: 54321


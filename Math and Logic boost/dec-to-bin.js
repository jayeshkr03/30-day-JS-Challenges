// Function to convert a decimal number to binary
function decToBin(num) {
    if (num === 0) {
        return "0"; // Special case for zero
    }

    let binary = "";
    while (num > 0) {
        binary = (num % 2) + binary; // Prepend the remainder to the binary string
        num = Math.floor(num / 2); // Divide the number by 2 and discard the fractional part
    }
    return binary; 
}


console.log("Decimal 10 to Binary: " + decToBin(92));


// Output: Decimal 10 to Binary: 1011100
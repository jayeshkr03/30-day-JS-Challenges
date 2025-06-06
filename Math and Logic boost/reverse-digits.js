function reverseDigits(num) {
    if (num < 0) {
        return "Negative numbers cannot be reversed";
    }
    if (num === 0) {
        return "0";
    }

    let reversed = 0;
    while (num > 0) {
        const digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    return reversed;
}

console.log("Reversed digits of 12345: " + reverseDigits(12345)); 


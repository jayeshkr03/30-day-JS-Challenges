function sumOfDigits(num) {
    if (num < 0) {
        return "Negative numbers cannot have their digits summed";
    }
    if (num === 0) {
        return "0";
    }

    let sum = 0;
    while (num > 0) {
        const digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log("Sum of digits of 12345: " + sumOfDigits(12345));
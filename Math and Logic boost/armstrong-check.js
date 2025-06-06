function isArmstrongNumber(num) {
    if (num < 0) return "Negative numbers cannot be Armstrong numbers";

    const digits = num.toString().split('').map(Number);
    const numDigits = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, numDigits), 0);

    return sum === num ? "Armstrong number" : "Not an Armstrong number";
}

console.log(isArmstrongNumber(153)); 
console.log(isArmstrongNumber(123)); 
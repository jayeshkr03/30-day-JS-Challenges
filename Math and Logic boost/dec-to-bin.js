function decToBin(num) {
    if (num < 0) {
        return "Negative numbers cannot be converted to binary";
    }
    if (num === 0) {
        return "0";
    }

    let binary = "";
    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }
    return binary;
}


console.log("Decimal 10 to Binary: " + decToBin(92));
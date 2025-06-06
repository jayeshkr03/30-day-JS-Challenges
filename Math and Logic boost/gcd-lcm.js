function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

console.log("GCD of 12 and 15 is: " + gcd(12, 15));
console.log("LCM of 12 and 15 is: " + lcm(12, 15));


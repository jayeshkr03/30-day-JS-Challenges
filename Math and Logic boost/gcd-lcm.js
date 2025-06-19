// calculate GCD and LCM of two numbers
function gcd(a, b) {
    if (b === 0) { // Base case: if b is 0, return a
        return a;
    }
    return gcd(b, a % b); // Recursive case: call gcd with b and the remainder of a divided by b
}

function lcm(a, b) {
    return (a * b) / gcd(a, b); // Calculate LCM using the formula: LCM(a, b) = (a * b) / GCD(a, b)
}

console.log("GCD of 12 and 15 is: " + gcd(12, 15));
console.log("LCM of 12 and 15 is: " + lcm(12, 15));

// Output:
// GCD of 12 and 15 is: 3
// LCM of 12 and 15 is: 60

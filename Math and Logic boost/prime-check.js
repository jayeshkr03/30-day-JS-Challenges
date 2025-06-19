// Check if a number is prime
function isPrime(num) {
    if (num <= 1) return "Not prime"; // Numbers less than or equal to 1 are not prime
    if (num <= 3) return "Prime"; // 2 and 3 are prime numbers

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return "Not prime"; //If num is divisible by anythin greater than 1 and less than itself, it's not prime
    }
    return "Prime";
}

console.log(isPrime(7));
console.log(isPrime(10));

// Output:
// Prime
// Not prime


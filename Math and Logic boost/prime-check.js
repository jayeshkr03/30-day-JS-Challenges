function isPrime(num) {
    if (num <= 1) return "Not prime";
    if (num <= 3) return "Prime";

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return "Not prime";
    }
    return "Prime";
}

console.log(isPrime(7));
console.log(isPrime(10));

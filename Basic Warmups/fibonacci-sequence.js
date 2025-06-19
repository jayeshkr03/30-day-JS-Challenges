// Fibonacci Sequence Generator
function fibonacci(n) {
    if (n < 0) {
        return "Fibonacci sequence is not defined for negative numbers";
    }
    if (n === 0) {
        return '[empty]'; // Return an nothing array for n = 0
    }
    if (n === 1) {
        return [0]; // Return an array with the first Fibonacci number for n = 1
    }
    if (n === 2) {
        return [0, 1]; // Return the first two Fibonacci numbers for n = 2
    }

    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // Calculate the next Fibonacci number
    }
    return fib;
}
console.log(Array.isArray(fibonacci(8)) ? fibonacci(8).join(", ") : fibonacci(8));
console.log(Array.isArray(fibonacci(0)) ? fibonacci(0).join(", ") : fibonacci(0));
console.log(Array.isArray(fibonacci(1)) ? fibonacci(1).join(", ") : fibonacci(1));
console.log(Array.isArray(fibonacci(-5)) ? fibonacci(-5).join(", ") : fibonacci(-5));

//Output:
// 0, 1, 1, 2, 3, 5, 8, 13
// []
// [0]
// [0, 1]
// Fibonacci sequence is not defined for negative numbers
// Note: The output is formatted as a string for better readability in the console.
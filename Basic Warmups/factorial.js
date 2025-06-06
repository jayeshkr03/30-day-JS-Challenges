// Factorial function
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers"; // validate input
    }
    if (n === 0 || n === 1) { 
        return 1; // factorial of 0 or 1 is 1
    }
    let result = 1;
    for (let i = 2; i <= n; i++) { // loop from 2 to n
        result *= i; // multiply result by i
    }
    return result;
}

console.log(factorial(5));
console.log(factorial(0));

//output:
// 120
// 1
// FizzBuzz Problem
function fizzbuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) { // Check if the number is divisible by both 3 and 5
            console.log("FizzBuzz");
        } else if (i % 3 === 0) { // Check if the number is divisible by 3
            console.log("Fizz");
        } else if (i % 5 === 0) { // Check if the number is divisible by 5
            console.log("Buzz");
        } else {
            console.log(i); // Print other numbers
        }
    }
}

fizzbuzz(20);

// Output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Write a function that takes a positive integer n and returns the sum of all integers from 1 to n.
function sum1ToN(n) { // Function to calculate the sum of integers from 1 to n
    if (n < 0) {
        return "Sum is not defined for negative numbers";
    }
    let sum = 0;
    for (let i = 1; i <= n; i++) { // Loop from 1 to n
        sum += i; // Add each integer to the sum
    }
    return sum;
}
console.log(sum1ToN(5));
console.log(sum1ToN(0));

// Output:
// 15
// 0
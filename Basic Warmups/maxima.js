// This code defines a function to find the maximum of three numbers and logs the result to the console.
function maxOfThree(a, b, c) { // Function to find the maximum of three numbers
    if (a >= b && a >= c) { // Check if a is greater than or equal to both b and c
        return a;
    } else if (b >= a && b >= c) { // Check if b is greater than or equal to both a and c
        return b;
    } else {
        return c;
    }
}
console.log(maxOfThree(5, 10, 3)); 

// Output: 10
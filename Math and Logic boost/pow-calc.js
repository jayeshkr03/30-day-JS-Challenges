// Function to calculate power of a number 
function pow(n, p) {
    if (p == 1) return n; //if power is 1, return the number itself
    return n * pow(n, p - 1); //Multiply the number by the result of pow with power decreased by 1
}


let n = 22;
let power = 3;
console.log(pow(n, power));


// Output: 10648


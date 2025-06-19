// This function checks if a number is even or odd
function checkEvenOdd(number) {
  if (number % 2 === 0) { // Check if the number is even
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOdd(4));  
console.log(checkEvenOdd(7));  

// output:
// Even
// Odd
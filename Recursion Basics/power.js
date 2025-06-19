// Calculate powers using Recurrsion

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } 
  else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(7, 3));

// Output:
// 343
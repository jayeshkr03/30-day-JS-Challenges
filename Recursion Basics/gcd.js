// Find GCD using recursion

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

console.log(gcd(48, 18)); 

// Output:
// 6
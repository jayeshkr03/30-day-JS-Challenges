// climb stairs using dynamic programming

function climbStairs(n) {
  if (n <= 2) return n;

  let arr = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
}

console.log(climbStairs(5));
console.log(climbStairs(7));

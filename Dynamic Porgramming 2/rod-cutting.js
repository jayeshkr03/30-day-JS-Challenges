// Rod Cutting Problem

function rodCutting(prices, n) {
  let arr = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      arr[i] = Math.max(arr[i], prices[j] + arr[i - j - 1]);
    }
  }

  return arr[n];
}

console.log(rodCutting([1, 5, 8, 9, 10], 4)); 
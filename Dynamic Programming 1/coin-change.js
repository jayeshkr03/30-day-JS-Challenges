// coin change ₹₹

function coinChange(coins, amount) {
  let arr = new Array(amount + 1).fill(Infinity);
  arr[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i >= coin) {
        arr[i] = Math.min(arr[i], arr[i - coin] + 1);
      }
    }
  }

  return arr[amount] === Infinity ? -1 : arr[amount];
}

// Example
console.log(coinChange([1, 2, 5], 11)); 

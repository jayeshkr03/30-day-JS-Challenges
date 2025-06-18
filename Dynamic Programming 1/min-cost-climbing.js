// min cost climb stairs

function minCostClimbingStairs(cost) {
  const n = cost.length;
  let arr = new Array(n);

  arr[0] = cost[0];
  arr[1] = cost[1];

  for (let i = 2; i < n; i++) {
    arr[i] = cost[i] + Math.min(arr[i - 1], arr[i - 2]);
  }

  return Math.min(arr[n - 1], arr[n - 2]);
}

console.log(minCostClimbingStairs([10, 15, 20]));

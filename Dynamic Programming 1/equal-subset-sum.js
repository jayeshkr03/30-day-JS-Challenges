// Equal Subset Sum Partition

function canPartition(nums) {
  let total = nums.reduce((a, b) => a + b, 0);
  if (total % 2 !== 0) return false;

  let target = total / 2;
  let dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (let num of nums) {
    for (let j = target; j >= num; j--) {
      dp[j] = dp[j] || dp[j - num];
    }
  }

  return dp[target];
}

console.log(canPartition([1, 5, 11, 5])); 
console.log(canPartition([1, 2, 3, 5]));  
// largest increasing subsequence

function lengthOfLIS(nums) {
  const n = nums.length;
  if (n === 0) return 0;

  let dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]));
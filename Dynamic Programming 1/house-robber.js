// house robber problem

function rob(nums) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  let arr = new Array(n);
  arr[0] = nums[0];
  arr[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    arr[i] = Math.max(arr[i - 1], arr[i - 2] + nums[i]);
  }

  return arr[n - 1];
}

console.log(rob([2, 7, 9, 3, 1])); 
console.log(rob([3, 2, 6, 4, 0, 9])); 
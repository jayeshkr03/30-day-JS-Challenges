// Equal Subset Sum Partition

function canPartition(nums) {
  let total = nums.reduce((a, b) => a + b, 0);
  if (total % 2 !== 0) return false;

  let target = total / 2;
  let arr = new Array(target + 1).fill(false);
  arr[0] = true;

  for (let num of nums) {
    for (let j = target; j >= num; j--) {
      arr[j] = arr[j] || arr[j - num];
    }
  }

  return arr[target];
}

console.log(canPartition([1, 5, 11, 5])); 
console.log(canPartition([1, 2, 3, 5]));  
// matrix chain multiplication

function minMultiply(nums) {
  let n = nums.length;
  let box = Array(n).fill().map(() => Array(n).fill(0));

  for (let len = 2; len < n; len++) {
    for (let i = 1; i < n - len + 1; i++) {
      let j = i + len - 1;
      box[i][j] = Infinity;

      for (let k = i; k < j; k++) {
        let steps = box[i][k] + box[k + 1][j] + nums[i - 1] * nums[k] * nums[j];
        if (steps < box[i][j]) {
          box[i][j] = steps;
        }
      }
    }
  }
  return box[1][n - 1];
}

console.log(minMultiply([40, 20, 30, 10, 30])); 
console.log(minMultiply([10, 20, 30, 40, 30])); 
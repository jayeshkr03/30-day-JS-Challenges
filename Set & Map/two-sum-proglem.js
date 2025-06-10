// two sum problem

function twoSum(nums, target) {
  const numMap = new Map(); 

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum; 

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(currentNum, i);
  }
  return [];
}

const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1)); 

// 4 sum problem 

function fourSum(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];
    const n = nums.length;

    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                const currentSum = nums[i] + nums[j] + nums[left] + nums[right];

                if (currentSum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);

                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (currentSum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return result;
}

const arr = [2,4,6,8,9,5,3,2,4,6,8,9,21,3,,7,784,23,2,34,6,78,89,6];
const target = 12;

console.log(fourSum(arr, target));
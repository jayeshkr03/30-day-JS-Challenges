// sliding windows max

function slidingWindowMaximum(nums, k) {
    if (k > nums.length) {
        return [];
    }

    const result = [];
    const deque = [];

    for (let i = 0; i < nums.length; i++) {
        while (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }

        while (deque.length > 0 && nums[i] >= nums[deque[deque.length - 1]]) {
            deque.pop();
        }

        deque.push(i);

        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}

const nums1 = [1, 3, -1, -3, 5, 3, 6, 7];
const k1 = 3;
console.log(slidingWindowMaximum(nums1, k1));

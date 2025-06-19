// find largest rectangle in histogram

function largestRectangleArea(heights) {
    let maxArea = 0;
    const stack = [];

    for (let i = 0; i <= heights.length; i++) {
        const h = (i === heights.length) ? 0 : heights[i]; 

        while (stack.length > 0 && heights[stack[stack.length - 1]] > h) {
            const poppedIndex = stack.pop();
            const poppedHeight = heights[poppedIndex];
            const width = stack.length === 0 ? i : (i - stack[stack.length - 1] - 1);
            maxArea = Math.max(maxArea, poppedHeight * width);
        }
        stack.push(i);
    }

    return maxArea;
}

const histogram1 = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(histogram1));

const histogram2 = [6, 2, 5, 4, 5, 1, 6];
console.log(largestRectangleArea(histogram2));
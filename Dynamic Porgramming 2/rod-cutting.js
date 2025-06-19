// Rod Cutting Problem

function cutRod(prices, length) {
  let box = new Array(length + 1).fill(0);

  for (let i = 1; i <= length; i++) {
    for (let j = 0; j < i; j++) {
      box[i] = Math.max(box[i], prices[j] + box[i - j - 1]);
    }
  }

  return box[length];
}

console.log(cutRod([1, 5, 8, 9, 10], 4));
console.log(cutRod([2, 5, 7, 8], 4));

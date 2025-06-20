// Subset Sum

function canMakeSum(numbers, target) {
  let box = new Array(target + 1).fill(false);
  box[0] = true;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = target; j >= numbers[i]; j--) {
      if (box[j - numbers[i]]) {
        box[j] = true;
      }
    }
  }

  return box[target];
}

console.log(canMakeSum([2, 3, 7, 8, 10], 11)); 
console.log(canMakeSum([1, 2, 5], 4)); 
// Finding pairs with given sum

function findPairWithSumHashMap(arr, targetSum) {
  const seenNumbers = new Set(); // Use a Set for efficient lookups

  for (const num of arr) {
    const complement = targetSum - num;
    if (seenNumbers.has(complement)) {
      return [complement, num]; // Pair found
    }
    seenNumbers.add(num); // Add current number to the set
  }
  return null; // No pair found
}

// Example usage:
const numbers1 = [1, 2, 3, 4, 5];
const target1 = 7;
console.log(findPairWithSumHashMap(numbers1, target1)); 

const numbers2 = [10, 20, 10, 50, 40, 60, 70];
const target2 = 60;
console.log(findPairWithSumHashMap(numbers2, target2)); 

// Output:
// [ 3, 4 ]
// [ 10, 50 ]
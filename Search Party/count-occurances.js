// count occurances in search

function countOccurrences(data, target) {
  let count = 0; // Initialize counter
  for (let i = 0; i < data.length; i++) { // Loop through each element/character
    if (data[i] === target) { // If current element matches target
      count++; // Increment counter
    }
  }
  return count; // Return total count
}

const str = "hello world";
console.log(countOccurrences(str, "l"));

const arr = [1, 2, 2, 3, 2, 4];
console.log(countOccurrences(arr, 2)); 

// Output:
// 3
// 3
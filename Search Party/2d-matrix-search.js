// Search in a 2D Matrix

function search2dMatrix(matrix, target) {
  for (let i = 0; i < matrix.length; i++) { // Iterate through rows
    for (let j = 0; j < matrix[i].length; j++) { // Iterate through columns
      if (matrix[i][j] === target) {
        return true; 
      }
    }
  }
  return false; 
}

const unsortedMatrix = [[7, 2, 9], [4, 1, 5], [6, 8, 3]];
console.log(search2dMatrix(unsortedMatrix, 5)); 
console.log(search2dMatrix(unsortedMatrix, 10)); 

// Output: 
// true
// false

// Flatten Nested Array using Recurrsion

function flattenArray(arr) {
  let result = [];
  for (const item of arr) { 
    if (Array.isArray(item)) { 

      result = result.concat(flattenArray(item)); 
    } else {

      result.push(item); 
    }
  }

  return result; 
}


const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
console.log(flattenArray(nestedArray))
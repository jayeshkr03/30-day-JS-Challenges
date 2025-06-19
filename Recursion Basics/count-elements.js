// Count elements in array using recursion

function countArrayElements(arr) {
  if (arr.length === 0) {
    return 0;
  } 
  else {
    return 1 + countArrayElements(arr.slice(1));
  }
}

const myArray = [1, 2, 3, 4, 5];
console.log(countArrayElements(myArray)); 

// Output:
// 5
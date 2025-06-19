//@ts-check

// edit distance

function editSteps(wordA, wordB) {
  let lenA = wordA.length;
  let lenB = wordB.length;

  let box = Array(lenA + 1).fill().map(() => Array(lenB + 1).fill(0));

  for (let i = 0; i <= lenA; i++) {
    for (let j = 0; j <= lenB; j++) {
      if (i === 0) {
        box[i][j] = j;
      } else if (j === 0) {
        box[i][j] = i;
      } else if (wordA[i - 1] === wordB[j - 1]) {
        box[i][j] = box[i - 1][j - 1];
      } else {
        box[i][j] = 1 + Math.min(
          box[i - 1][j],     // remove
          box[i][j - 1],     // insert
          box[i - 1][j - 1]  // replace
        );
      }
    }
  }

  return box[lenA][lenB];
}

console.log(editSteps("horse", "ros")); 
console.log(editSteps("intention", "execution")); 

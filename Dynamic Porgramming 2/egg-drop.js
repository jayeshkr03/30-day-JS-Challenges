// Egg Drop problem

function eggBreak(eggs, floors) {
  let box = Array(eggs + 1).fill().map(() => Array(floors + 1).fill(0));

  for (let e = 1; e <= eggs; e++) {
    for (let f = 1; f <= floors; f++) {
      if (e === 1) {
        box[e][f] = f;
      } else {
        box[e][f] = Infinity;
        for (let k = 1; k <= f; k++) {
          let tryBreak = 1 + Math.max(box[e - 1][k - 1], box[e][f - k]);
          if (tryBreak < box[e][f]) {
            box[e][f] = tryBreak;
          }
        }
      }
    }
  }
  return box[eggs][floors];
}

console.log(eggBreak(2, 10)); 
console.log(eggBreak(3, 14)); 

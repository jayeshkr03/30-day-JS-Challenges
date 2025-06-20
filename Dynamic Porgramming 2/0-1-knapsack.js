// 0/1 Knapsack

function knapsack(items, space) {
  let count = items.length;
  let count = items.length;

  let box = Array(count + 1).fill().map(() => Array(space + 1).fill(0));

  for (let i = 1; i <= count; i++) {
    for (let w = 1; w <= space; w++) {
      let val = items[i - 1][0];
      let wt = items[i - 1][1];

      if (wt <= w) {
        box[i][w] = Math.max(box[i - 1][w], box[i - 1][w - wt] + val);
      } else {
        box[i][w] = box[i - 1][w];
      }
    }
  }

  return box[count][space];
}

console.log(knapsack([[60, 10], [100, 20], [120, 30]], 50)); 
console.log(knapsack([[10, 5], [40, 4], [30, 6], [50, 2]], 10)); 

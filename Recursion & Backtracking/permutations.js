function makeOrders(nums) {
  let answer = [];
  let used = new Array(nums.length).fill(false);

  function go(path) {
    if (path.length === nums.length) {
      answer.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(nums[i]);
      go(path);
      path.pop();
      used[i] = false;
    }
  }

  go([]);
  return answer;
}
 
let output = makeOrders([1, 2, 3]);
for (let order of output) {
  console.log(order.join(" -> "));
}


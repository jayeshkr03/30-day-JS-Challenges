function makeSets(nums) {
  let answer = [];

  function go(path, idx) {
    if (idx === nums.length) {
      answer.push([...path]);
      return;
    }
    go(path, idx + 1);
    path.push(nums[idx]);
    go(path, idx + 1);
    path.pop();
  }

  go([], 0);
  return answer;
}

let example = makeSets([1, 2, 3]);

example.forEach((group, i) => {
  console.log("Set", i + 1 + ":", group.join(", "));
});
function findSubsetSum(numBox, targetNumber) {
  var finalAnswers = [];

  function tryAllWays(currentIndex, myBag, currentSum) {
    if (currentSum === targetNumber) {
      finalAnswers.push(myBag.slice());
      return;
    }

    if (currentIndex === numBox.length || currentSum > targetNumber) {
      return;
    }

    myBag.push(numBox[currentIndex]);
    tryAllWays(currentIndex + 1, myBag, currentSum + numBox[currentIndex]);

    myBag.pop();
    tryAllWays(currentIndex + 1, myBag, currentSum);
  }

  tryAllWays(0, [], 0);
  return finalAnswers;
}

var myNumbers = [1, 2, 3];
var myTarget = 3;
var allCombos = findSubsetSum(myNumbers, myTarget);
console.log(allCombos);

// generate parenthesis

function makeBrackets(totalPairs) {
  var answerList = [];

  function doStuffNow(currentString, openBrackets, closeBrackets) {
    if (currentString.length === totalPairs * 2) {
      answerList.push(currentString);
      return;
    }

    if (openBrackets < totalPairs) {
      doStuffNow(currentString + "(", openBrackets + 1, closeBrackets);
    }

    if (closeBrackets < openBrackets) {
      doStuffNow(currentString + ")", openBrackets, closeBrackets + 1);
    }
  }

  doStuffNow("", 0, 0);
  return answerList;
}

var myBrackets = makeBrackets(3);
console.log(myBrackets);

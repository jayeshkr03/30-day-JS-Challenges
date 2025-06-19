// Reverse string using Recursion

function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substring(1)) + str.charAt(0);
  }
}

const names = "hello javascript html and css all";
console.log(reverseString(names));

// Output:
// dasarp peednas
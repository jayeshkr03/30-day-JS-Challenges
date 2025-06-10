//find frist repeated characters

function findFirstRepeatedCharMap(str) {
  const charCount = new Map();
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount.set(char, (charCount.get(char) || 0) + 1);
    if (charCount.get(char) > 1) {
      return char;
    }
  }
  return null;
}

console.log(findFirstRepeatedCharMap("hello world"));
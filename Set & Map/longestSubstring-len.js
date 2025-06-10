// length of the longest substring no repeat

function lengthOfLongestSubstring(s) {
  let charIndexMap = new Map(); 
  let maxLength = 0;
  let start = 0; 

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    if (charIndexMap.has(char) && charIndexMap.get(char) > start) {
      start = charIndexMap.get(char);
    }
    charIndexMap.set(char, end + 1);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("Long walks on the beach in april."));
console.log(lengthOfLongestSubstring("I'm the youngest but yet."));
console.log(lengthOfLongestSubstring("he was our inspirement"));

function firstNonRepeatingCharacter(message) {
    const charCount = {};

    for (const char of message) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of message) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}
console.log(firstNonRepeatingCharacter("hello i am an example string yyy vvv uuu www")); 
console.log(firstNonRepeatingCharacter("aabbccddeeffgghhii")); 


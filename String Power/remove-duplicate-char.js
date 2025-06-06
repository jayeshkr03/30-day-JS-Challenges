function removeDuplicateChars(str) {
    const seen = new Set();
    let result = '';
    
    for (const char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    
    return result;
}

console.log(removeDuplicateChars("hello i am an example string yyy vvv uuu www")); 

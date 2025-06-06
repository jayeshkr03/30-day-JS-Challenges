function findSubstrings(str, substr) {
    const indices = [];
    let index = str.indexOf(substr);
    
    while (index !== -1) {
        indices.push(index);
        index = str.indexOf(substr, index + 1);
    }
    
    return indices;
}

console.log(findSubstrings("hello i am an example string thisisthelongestword", "is"));
console.log(findSubstrings("hello i am an example string thisisthelongestword", "hello"));

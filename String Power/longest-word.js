function longestWord(message) {
    const words = message.split(' ');
    let longest = '';

    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

console.log(longestWord("hello i am an example string thisisthelongestword")); 


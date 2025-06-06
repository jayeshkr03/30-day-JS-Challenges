function countCharFrequency(str) {
    const frequency = {};
    for (const char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
}

const freq = countCharFrequency("this is a test string.");
console.table(freq);

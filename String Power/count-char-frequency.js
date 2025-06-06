function countCharFrequency(str) {
    const frequency = {}; // Object to store character counts
    for (const char of str) {
        frequency[char] = (frequency[char] || 0) + 1; // Increment count or start at 1
    }
    return frequency; // Return the frequency object
}

const freq = countCharFrequency("this is a test string.");
console.table(freq); 

// Output: 

// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │ t       │ 4      │
// │ h       │ 1      │
// │ i       │ 3      │
// │ s       │ 4      │
// │         │ 4      │
// │ a       │ 1      │
// │ e       │ 1      │
// │ r       │ 1      │
// │ n       │ 1      │
// │ g       │ 1      │
// │ .       │ 1      │
// └─────────┴────────┘
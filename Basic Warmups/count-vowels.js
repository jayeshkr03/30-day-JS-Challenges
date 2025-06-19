// Function to count the number of vowels in a given string
function countVowels(str) {
    const vowels = 'aeiouAEIOU'; // Define vowels
    str = str.replace(/[^a-zA-Z]/g, ''); // Remove non-alphabetic characters
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) { // Check if character is a vowel
            count++;
        }
    }

    return count;
}

console.log(countVowels("Hello World")); 
console.log(countVowels("Apple")); 

//output:
// 3
function capitalizeFirstLetters(str) {
    // Replace the first letter of each word with its uppercase version
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

console.log(capitalizeFirstLetters("this is a test string."));

// Output: This Is A Test String.
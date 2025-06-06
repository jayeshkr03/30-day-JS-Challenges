function capitalizeFirstLetters(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

console.log(capitalizeFirstLetters("this is a test string."));

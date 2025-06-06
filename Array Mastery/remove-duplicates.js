function removeDuplicates(arr) {
    let uniqueElements = [];
    let seen = new Set();

    for (let element of arr) {
        if (!seen.has(element)) {
            seen.add(element);
            uniqueElements.push(element);
        }
    }

    return uniqueElements;
}

let example = [1, 2, 2, 3, 4, 4, 5, 5, 6];
let unique = removeDuplicates(example);
console.log("Array after removing duplicates:", unique);
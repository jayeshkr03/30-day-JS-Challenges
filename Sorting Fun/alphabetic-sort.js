export function alphabeticSort(arr) {
    return arr.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });
}


const stringArray = ["banana", "apple", "orange", "grape"];
console.log("Sorted array: " + alphabeticSort(stringArray));



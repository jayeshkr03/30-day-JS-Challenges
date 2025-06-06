function objectSort(arr, key) {
    return arr.sort((a, b) => {
        if (a[key] < b[key]) {
            return -1;
        }
        if (a[key] > b[key]) {
            return 1;
        }
        return 0;
    });
}

const people = [
    { name: "Paratham", age: 30 },
    { name: "Bhavyam", age: 25 },
    { name: "Tirth", age: 35 }
];
console.log("Sorted by age:");
console.table(objectSort(people, "age"));
console.log("Sorted by name:");
console.table(objectSort(people, "name"));

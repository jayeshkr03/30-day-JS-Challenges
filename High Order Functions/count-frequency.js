// Count frequency of occurance using reduce()

const arr = ['apple', 'banana', 'apple', 'orange', 'apple', 'melon', 'banana', 'mango'];
const countFrequency = arr.reduce( function(p, q) {
    if(p[q]) { p[q] += 1 }
    else { p[q] = 1 };
    return p;
}, {});

console.table(countFrequency);
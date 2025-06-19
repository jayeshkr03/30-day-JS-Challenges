// Count frequency of occurance in array using map()

const freqMap = new Map();
const arr = [3,4,2,5,9,6,2,5,7,8,5,2,4,5,7,1,3,2];

for (const i of arr)
{
    if (freqMap.has(i))
    {
        freqMap.set(i, freqMap.get(i) + 1);
    }
    else 
    {
        freqMap.set(i, 1);
    }
}

console.table(freqMap);
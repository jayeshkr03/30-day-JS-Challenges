// check if the given array has 2 numbers = k

const k = 6;
const arr = [2,4,6,3,1,6,7,11,5];

function hasSum(arr, k)
{
    const seen = new Set();
    for (const num of arr)
    {
        const complement =  k - num;
        if (seen.has(complement))
        {
            return true;
        }
        seen.add(num)
    }
    return false;
}

console.log(hasSum(arr, k));

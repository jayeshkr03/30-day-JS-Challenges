// flatten nested objects

function flattenObject(obj, prefix = '') {
    const result = {};

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const newKey = prefix ? `${prefix}.${key}` : key;
            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                Object.assign(result, flattenObject(obj[key], newKey));
            } else {
                result[newKey] = obj[key];
            }
        }
    }
    return result;
}

const nestedObject = {a:1, b:{c:2, d:{e:3, f:'hello'}}, g:[4, 5], h:null};

const flattenedObject = flattenObject(nestedObject);
console.log(flattenedObject);

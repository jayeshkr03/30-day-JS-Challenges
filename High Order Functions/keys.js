// Order using key() values 

const unordered = {'b': 'foo', 'c': 'bar', 'a': 'baz'};
const ordered = Object.keys(unordered).sort().reduce( function(obj,key) { obj[key] = unordered[key]; return obj;}, {} );
console.log(ordered);

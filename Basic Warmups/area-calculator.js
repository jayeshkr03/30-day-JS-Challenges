//area calculator for circle and square
function calculateArea(shape, dimension) { //two parameters: shape type and dimension
    if (shape === 'circle') {
        if (dimension <= 0) {
            throw new Error('Dimension must be greater than zero'); // validate dimension
        }
        return 3.14159 * dimension * dimension; // calculate area of circle by using the formula πr²
    } else if (shape === 'square') {
        if (dimension <= 0) {
            throw new Error('Dimension must be greater than zero'); // validate dimension
        }
        return Math.pow(dimension, 2); // calculate area of square by using the formula side²
    } else {
        throw new Error('Unsupported shape type'); // validate shape type
    }
}

console.log("Circle area of radius 5:", calculateArea('circle', 5)); 
console.log("Square area of side 4:", calculateArea('square', 4)); 

// output:
// Circle area of radius 5: 78.53975
// Square area of side 4: 16
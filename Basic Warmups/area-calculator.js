//area calculator for circle and square
function calculateArea(shape, dimension) {
    if (shape === 'circle') {
        if (dimension <= 0) {
            throw new Error('Dimension must be greater than zero');
        }
        return 3.14159 * dimension * dimension;
    } else if (shape === 'square') {
        if (dimension <= 0) {
            throw new Error('Dimension must be greater than zero');
        }
        return Math.pow(dimension, 2);
    } else {
        throw new Error('Unsupported shape type');
    }
}

console.log("Circle area of radius 5:", calculateArea('circle', 5)); 
console.log("Square area of side 4:", calculateArea('square', 4)); 
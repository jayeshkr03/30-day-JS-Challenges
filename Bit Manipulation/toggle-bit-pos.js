// toggle bit position

function toggleBitPos (box, pos) {
    let mask = 1 << pos;
    let num = box ^ mask;

    return num;
}

console.log(toggleBitPos(12, 2));
console.log(toggleBitPos(7, 1));
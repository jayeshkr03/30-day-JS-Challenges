function isSafe(i, j, n, m) {
    return i >= 0 && i < n && j >= 0 && j < m;
}

function orangesRotting(mat) {
    let n = mat.length;
    let m = mat[0].length;
    let changed = false;
    let elapsedTime = 0;
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    while (true) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (mat[i][j] === elapsedTime + 2) {
                    for (const dir of directions) {
                        let x = i + dir[0];
                        let y = j + dir[1];
                        if (isSafe(x, y, n, m) && mat[x][y] === 1) {
                            mat[x][y] = mat[i][j] + 1;
                            changed = true;
                        }
                    }
                }
            }
        }
        if (!changed) break;
        changed = false;
        elapsedTime++;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (mat[i][j] === 1) return -1;
        }
    }

    return elapsedTime;
}

const mat = [
    [2, 1, 0, 2, 1], [1, 0, 1, 2, 1], [1, 0, 0, 2, 1] 
];

console.log(orangesRotting(mat));
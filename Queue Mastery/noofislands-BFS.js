function isSafe(grid, r, c, vis) {
    const rows = grid.length;
    const cols = grid[0].length;
    return (r >= 0) && (r < rows) && (c >= 0) && 
           (c < cols) && (grid[r][c] === 'L' && !vis[r][c]);
}

function bfs(grid, vis, sr, sc) {
    const rNbr = [ -1, -1, -1, 0, 0, 1, 1, 1 ];
    const cNbr = [ -1, 0, 1, -1, 1, -1, 0, 1 ];

    const queue = [];
    queue.push([sr, sc]);
    vis[sr][sc] = true;

    while (queue.length > 0) {
        const [r, c] = queue.shift();

        for (let k = 0; k < 8; k++) {
            const newR = r + rNbr[k];
            const newC = c + cNbr[k];
            if (isSafe(grid, newR, newC, vis)) {
                vis[newR][newC] = true;
                queue.push([newR, newC]);
            }
        }
    }
}

function countIslands(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const vis = Array.from({ length: rows }, () => Array(cols).fill(false));

    let islandCount = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 'L' && !vis[r][c]) {
                bfs(grid, vis, r, c);
                islandCount++;
            }
        }
    }

    return islandCount;
}

const grid = [
    ['L', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'L'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'W', 'W', 'W', 'W'],
    ['L', 'W', 'L', 'L', 'W']
];

console.log(countIslands(grid));
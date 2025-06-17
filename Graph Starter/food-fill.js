// food fill DFS

function floodFill(image, sr, sc, newColor) {
    const oldColor = image[sr][sc];
    if (oldColor === newColor) return image;

    function dfs(r, c) {
        if (
            r < 0 || c < 0 ||
            r >= image.length || c >= image[0].length ||
            image[r][c] !== oldColor
        ) return;

        image[r][c] = newColor;

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    dfs(sr, sc);
    return image;
}

const image = [
    [3, 15, 17],
    [22, 15, 6],
    [11, 5, -3]
];

const result = floodFill(image, 1, 1, 2);

console.log(result);
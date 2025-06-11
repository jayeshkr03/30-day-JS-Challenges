// JavaScript program to find celebrity

function celebrity(mat) {
    let n = mat.length;

    let indegree = new Array(n).fill(0);
    let outdegree = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let x = mat[i][j];

            outdegree[i] += x;
            indegree[j] += x;
        }
    }

    for (let i = 0; i < n; i++)
        if (indegree[i] === n - 1 && outdegree[i] === 0)
            return i;

    return -1;
}

let mat = [ [0, 1, 0], [0, 0, 0], [0, 1, 0] ];

console.log(celebrity(mat));
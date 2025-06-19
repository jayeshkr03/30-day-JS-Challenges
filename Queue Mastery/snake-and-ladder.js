// snake and lader 

function getMinDiceThrows(move) {
    let n = move.length;
    let visited = new Array(n).fill(false);
    let q = [];

    visited[0] = true;
    q.push([0, 0]);

    while (q.length > 0) {
        let curr = q[0];
        let v = curr[0];
        let dist = curr[1];

        if (v === n - 1)
            return dist;

        q.shift();

        for (let j = v + 1; j <= v + 6 && j < n; ++j) {
            if (!visited[j]) {
                visited[j] = true;
                let dest = (move[j] !== -1) ? move[j] : j;
                q.push([dest, dist + 1]);
            }
        }
    }

    return -1;
}

let n = 30;
let moves = new Array(n).fill(-1);

moves[2] = 21;
moves[4] = 7;
moves[10] = 25;
moves[19] = 28;

moves[26] = 0;
moves[20] = 8;
moves[16] = 3;
moves[18] = 6;

console.log(getMinDiceThrows(moves));
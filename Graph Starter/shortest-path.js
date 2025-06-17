// shortest path (BFS)

function shortestPath(graph, start, end) {
    const visited = Array(graph.length).fill(false);
    const prev = Array(graph.length).fill(null);
    const queue = [start];
    visited[start] = true;

    while (queue.length > 0) {
        const node = queue.shift();
        if (node === end) break;
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                prev[neighbor] = node;
                queue.push(neighbor);
            }
        }
    }

    const path = [];
    for (let at = end; at !== null; at = prev[at]) {
        path.push(at);
    }

    return path.reverse();
}

const graph = [
    [1, 2],
    [0, 3],
    [0, 3],
    [1, 2, 4],
    [3]
];

console.log(shortestPath(graph, 0, 4)); 
// Dijkstra’s Algorithm

function dijkstra(graph, start) {
    const dist = Array(graph.length).fill(Infinity);
    const visited = Array(graph.length).fill(false);
    dist[start] = 0;

    for (let i = 0; i < graph.length; i++) {
        let u = -1;
        for (let j = 0; j < graph.length; j++) {
            if (!visited[j] && (u === -1 || dist[j] < dist[u])) {
                u = j;
            }
        }

        if (dist[u] === Infinity) break;
        visited[u] = true;

        for (const [v, weight] of graph[u]) {
            if (dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
            }
        }
    }

    return dist;
}

const graph = [
    [[1, 4], [2, 1]],
    [[3, 1]],
    [[1, 2], [3, 5]],
    []
];

console.log(dijkstra(graph, 0));
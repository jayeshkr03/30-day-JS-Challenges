// topological sorting

function topologicalSort(graph) {
    const visited = Array(graph.length).fill(false);
    const result = [];

    function dfs(node) {
        visited[node] = true;
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }
        result.push(node);
    }

    for (let i = 0; i < graph.length; i++) {
        if (!visited[i]) {
            dfs(i);
        }
    }

    return result.reverse();
}

const graph = [
    [1, 2],
    [3],
    [3],
    []
];

console.log(topologicalSort(graph)); 
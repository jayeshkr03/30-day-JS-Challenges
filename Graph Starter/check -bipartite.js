// Check bipartite

function isBipartite(graph) {
    const color = Array(graph.length).fill(null);
    
    function bfs(start) {
        const queue = [start];
        color[start] = 0;

        while (queue.length > 0) {
            const node = queue.shift();
            for (const neighbor of graph[node]) {
                if (color[neighbor] === null) {
                    color[neighbor] = 1 - color[node];
                    queue.push(neighbor);
                } else if (color[neighbor] === color[node]) {
                    return false;
                }
            }
        }

        return true;
    }

    for (let i = 0; i < graph.length; i++) {
        if (color[i] === null) {
            if (!bfs(i)) return false;
        }
    }

    return true;
}

console.log(isBipartite([[1,3],[0,2],[1,3],[0,2]])); 
console.log(isBipartite([[1,2,3],[0,2],[0,1,3],[0,2]])); 

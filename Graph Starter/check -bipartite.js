// Check bipartite

function isBipartite(graph) {
    const color = {};

    for (let node in graph) {
        if (!(node in color)) {
            const queue = [node];
            color[node] = 0;

            while (queue.length > 0) {
                const current = queue.shift();

                for (let neighbor of graph[current]) {
                    if (!(neighbor in color)) {
                        color[neighbor] = 1 - color[current]; 
                        queue.push(neighbor);
                    } else if (color[neighbor] === color[current]) {
                        return false; 
                    }
                }
            }
        }
    }

    return true;
}


const graph1 = {
    A: ['B', 'D'],
    B: ['A', 'C'],
    C: ['B', 'D'],
    D: ['A', 'C']
};

console.log(isBipartite(graph1)); 

// detect cycle - directed 

function hasCycle(graph) {
    const visited = new Set();
    const recStack = new Set();

    function dfs(node) {
        if (recStack.has(node)) return true;
        if (visited.has(node)) return false;

        visited.add(node);
        recStack.add(node);

        for (let neighbor of graph[node]) {
            if (dfs(neighbor)) return true;
        }

        recStack.delete(node);
        return false;
    }

    for (let node in graph) {
        if (dfs(node)) return true;
    }

    return false;
}

const graph1 = {
    A: ['B'],
    B: ['C'],
    C: ['A'] 
};

console.log(hasCycle(graph1)); 

const graph2 = {
    A: ['B'],
    B: ['C'],
    C: [] 
};

console.log(hasCycle(graph2)); 

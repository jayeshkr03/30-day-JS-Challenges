// DFS Traversal

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        this.addVertex(v1);
        this.addVertex(v2);
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1); 
    }

    dfs(start) {
        const visited = {};
        const result = [];

        const dfsRecursive = (vertex) => {
            if (!vertex) return;
            visited[vertex] = true;
            result.push(vertex);

            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited[neighbor]) {
                    dfsRecursive(neighbor);
                }
            }
        };

        dfsRecursive(start);
        return result;
    }

    printGraph() {
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex} -> ${this.adjacencyList[vertex].join(', ')}`);
        }
    }
}

const g = new Graph();
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");

console.log("Graph:");
g.printGraph();

console.log("\nDFS Traversal from A:");
console.log(g.dfs("A")); 
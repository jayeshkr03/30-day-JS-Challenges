// detect cycle

function hasCycle(graph) {
  const visited = new Set(), stack = new Set();
  function dfs(node) {
    if (stack.has(node)) return true;
    if (visited.has(node)) return false;
    visited.add(node); stack.add(node);
    for (let neighbor of graph[node] || []) {
      if (dfs(neighbor)) return true;
    }
    stack.delete(node);
    return false;
  }
  return Object.keys(graph).some(dfs);
}

// Example usage:
const graph = { A: ['B'], B: ['C'], C: ['A'] };
console.log(hasCycle(graph)); // true

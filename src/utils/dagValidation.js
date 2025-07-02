export const validateDAG = (nodes, edges) => {
  // Check minimum nodes
  if (nodes.length < 2) {
    return {
      isValid: false,
      message: 'Invalid DAG: At least 2 nodes are required'
    };
  }

  // Check all nodes are connected
  const connectedNodeIds = new Set();
  edges.forEach(edge => {
    connectedNodeIds.add(edge.source);
    connectedNodeIds.add(edge.target);
  });

  const allNodesConnected = nodes.every(node => connectedNodeIds.has(node.id));
  if (!allNodesConnected) {
    return {
      isValid: false,
      message: 'Invalid DAG: All nodes must be connected'
    };
  }

  // Check for cycles
  if (hasCycle(nodes, edges)) {
    return {
      isValid: false,
      message: 'Invalid DAG: Cycle detected'
    };
  }

  return {
    isValid: true,
    message: 'Valid DAG'
  };
};

const hasCycle = (nodes, edges) => {
  const adjacencyList = {};
  const visited = {};
  const recursionStack = {};

  // Initialize adjacency list
  nodes.forEach(node => {
    adjacencyList[node.id] = [];
  });

  // Build adjacency list
  edges.forEach(edge => {
    adjacencyList[edge.source].push(edge.target);
  });

  // Check for cycles using DFS
  const checkCycle = (nodeId) => {
    if (recursionStack[nodeId]) return true;
    if (visited[nodeId]) return false;

    visited[nodeId] = true;
    recursionStack[nodeId] = true;

    for (const neighbor of adjacencyList[nodeId]) {
      if (checkCycle(neighbor)) {
        return true;
      }
    }

    recursionStack[nodeId] = false;
    return false;
  };

  for (const node of nodes) {
    if (checkCycle(node.id)) {
      return true;
    }
  }

  return false;
};
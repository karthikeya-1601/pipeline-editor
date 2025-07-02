import React, { useState, useCallback, useEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Controls,
  Background,
  Handle,
  Position,
  useNodesState,
  useEdgesState,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';
import AddNodeButton from './AddNodeButton';
import DAGStatus from './DAGStatus';
import NodeModal from './NodeModal';
import '../styles.css';

const nodeTypes = {
  custom: ({ data }) => (
    <div className="custom-node">
      <div className="node-label">{data.label}</div>
      <Handle type="target" position={Position.Left} id="left" />
      <Handle type="source" position={Position.Right} id="right" />
    </div>
  ),
};

// DAG Validation Logic
const validateDAG = (nodes, edges) => {
  if (nodes.length < 2) {
    return { isValid: false, message: 'At least 2 nodes are required.' };
  }

  const nodeMap = new Map(nodes.map((n) => [n.id, n]));
  const adjacency = {};
  nodes.forEach((node) => {
    adjacency[node.id] = [];
  });

  for (const edge of edges) {
    if (edge.source === edge.target) {
      return { isValid: false, message: 'Self-loops are not allowed.' };
    }
    if (nodeMap.has(edge.source) && nodeMap.has(edge.target)) {
      adjacency[edge.source].push(edge.target);
    }
  }

  for (const node of nodes) {
    const connected = edges.some((e) => e.source === node.id || e.target === node.id);
    if (!connected) {
      return {
        isValid: false,
        message: `Node "${node.data.label}" is not connected.`,
      };
    }
  }

  // Cycle detection using DFS
  const visited = {};
  const stack = {};

  const hasCycle = (nodeId) => {
    visited[nodeId] = true;
    stack[nodeId] = true;

    for (const neighbor of adjacency[nodeId]) {
      if (!visited[neighbor] && hasCycle(neighbor)) return true;
      else if (stack[neighbor]) return true;
    }

    stack[nodeId] = false;
    return false;
  };

  for (const node of nodes) {
    if (!visited[node.id]) {
      if (hasCycle(node.id)) {
        return { isValid: false, message: 'Cycle detected in the graph.' };
      }
    }
  }

  return { isValid: true, message: 'Valid DAG ✅' };
};

const PipelineEditor = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [showModal, setShowModal] = useState(false);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [validation, setValidation] = useState({ isValid: true, message: '' });

  const onConnect = (params) => {
    if (params.source === params.target) return;
    setEdges((eds) =>
      addEdge(
        {
          ...params,
          markerEnd: { type: MarkerType.ArrowClosed },
          type: 'default',
        },
        eds
      )
    );
  };

  const onNodesDelete = (nodesToRemove) => {
    const idsToRemove = new Set(nodesToRemove.map((n) => n.id));
    setNodes((nds) => nds.filter((n) => !idsToRemove.has(n.id)));
    setEdges((eds) =>
      eds.filter((e) => !idsToRemove.has(e.source) && !idsToRemove.has(e.target))
    );
  };

  const onEdgesDelete = (edgesToRemove) => {
    const idsToRemove = new Set(edgesToRemove.map((e) => e.id));
    setEdges((eds) => eds.filter((e) => !idsToRemove.has(e.id)));
  };

  const onInit = (rfi) => {
    setReactFlowInstance(rfi);
  };

  const addNode = (label) => {
    const newNode = {
      id: `node-${Date.now()}`,
      type: 'custom',
      data: { label },
      position: reactFlowInstance
        ? reactFlowInstance.project({ x: 100, y: 100 })
        : { x: 100, y: 100 },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const deleteSelectedElements = () => {
    const selectedNodeIds = new Set(nodes.filter((n) => n.selected).map((n) => n.id));
    const selectedEdgeIds = new Set(edges.filter((e) => e.selected).map((e) => e.id));

    setNodes((nds) => nds.filter((n) => !selectedNodeIds.has(n.id)));
    setEdges((eds) =>
      eds.filter(
        (e) =>
          !selectedEdgeIds.has(e.id) &&
          !selectedNodeIds.has(e.source) &&
          !selectedNodeIds.has(e.target)
      )
    );
  };

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Delete') {
        deleteSelectedElements();
      }
    },
    [nodes, edges]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    const result = validateDAG(nodes, edges);
    setValidation(result);
  }, [nodes, edges]);

  return (
    <div className="pipeline-editor">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" style={{ height: '80vh', width: '100%' }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodesDelete={onNodesDelete}
            onEdgesDelete={onEdgesDelete}
            onInit={onInit}
            nodeTypes={nodeTypes}
            fitView
          >
            <Controls />
            <Background color="#aaa" gap={16} />
          </ReactFlow>
        </div>

        <div className="editor-controls">
          <AddNodeButton onClick={() => setShowModal(true)} />
          <button className="delete-button" onClick={deleteSelectedElements}>
            Delete Selected
          </button>
          <DAGStatus isValid={validation.isValid} message={validation.message} />
        </div>

        {showModal && (
          <NodeModal
            onClose={() => setShowModal(false)}
            onSubmit={(label) => {
              addNode(label);
              setShowModal(false);
            }}
          />
        )}
      </ReactFlowProvider>
    </div>
  );
};

export default PipelineEditor;

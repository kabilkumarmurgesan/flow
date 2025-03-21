import React, { useCallback, useState } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Sidebar component
const Sidebar = ({ onAddNode }) => {
  const nodeTypes = [
    { type: 'input', label: 'Input Node', size: { width: 150, height: 50 } },
    { type: 'output', label: 'Output Node', size: { width: 150, height: 50 } },
    { type: 'default', label: 'Default Node', size: { width: 150, height: 50 } },
  ];

  return (
    <div style={{ width: '200px', background: '#f4f4f4', padding: '10px' }}>
      <h3>Node Types</h3>
      {nodeTypes.map((node) => (
        <div
          key={node.type}
          style={{
            padding: '10px',
            margin: '5px 0',
            background: '#fff',
            border: '1px solid #ddd',
            cursor: 'pointer',
          }}
          onClick={() => onAddNode(node)}
        >
          {node.label}
        </div>
      ))}
    </div>
  );
};

const FlowWithSidebar = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Handle connecting nodes
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  // Handle adding a new node
  const onAddNode = useCallback(
    (nodeType) => {
      const newNode = {
        id: `${nodes.length + 1}`, // Generate a unique ID
        type: nodeType.type,
        position: { x: Math.random() * 500, y: Math.random() * 500 }, // Random position
        data: { label: nodeType.label },
        style: { width: nodeType.size.width, height: nodeType.size.height },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [nodes.length, setNodes]
  );

  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      {/* Sidebar */}
      <Sidebar onAddNode={onAddNode} />

      {/* Flow Area */}
      <div style={{ flexGrow: 1 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};

export default FlowWithSidebar;